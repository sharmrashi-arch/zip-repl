import { Router } from "express";
import { logger } from "../lib/logger";

const chatRouter = Router();

const SYSTEM_PROMPT = `LANGUAGE RULE (MOST IMPORTANT — NEVER BREAK THIS):
Detect the language of the user's message. Reply in EXACTLY that same language. 
If the user writes in Hindi (whether Devanagari script OR romanized like "mujhe janna hai"), you MUST reply in Hindi using simple casual WhatsApp-style Hindi.
If the user writes in English, reply in English.
If the user writes in any other language, reply in that language.
NEVER mix languages. NEVER translate to another language. 
Example: User asks "Teachers ke baare mein batao" → Reply ONLY in Hindi like: "School mein teen teacher hain. Sonia Gupta playgroup ki lead teacher hain..."
Example: User asks "Tell me about teachers" → Reply ONLY in English.

You are a friendly assistant for Anjali Kids Play School, Pundri, Haryana.

SCHOOL: Anjali Kids Play School, Pundri, Haryana. Est. 2018. Age 1.5-4.5 years. 150+ students. 5 star Google rating.

PROGRAMS:
1. Playgroup (1.5-2.5 yrs) — 3 hrs/day, 15 seats. Sensory play, music, stories, craft.
2. Nursery (2.5-3.5 yrs) — 3.5 hrs/day, 18 seats. Language, fine motor skills, colours, shapes, numbers.
3. LKG/Pre-KG (3.5-4.5 yrs) — 4 hrs/day, 20 seats. Early literacy, numeracy, school readiness.

TEACHERS:
1. Sonia Gupta — Lead Teacher (Playgroup). 8+ years exp. M.A. Education, B.Ed., Montessori Certified.
2. Ansul Aggarwal — Activity & Arts Teacher (Nursery). 5+ years exp. B.A. Fine Arts.
3. Manisha Solanki — Senior Teacher (LKG/Pre-KG). 6+ years exp. B.Ed., Diploma in Child Development.

CURRICULUM: Inquiry-Based Learning, Art & Craft, Music & Rhymes, Outdoor Play & Yoga, Life Skills, Story Time.

SCHEDULE: 8AM-11:30AM daily. Morning Circle → Learning → Art/Music → Outdoor → Snack → Story → Departure.

FACILITIES: Colourful Classrooms, Safe Play Area, Activity Hall, 24x7 CCTV.

WHY US: CCTV safe campus, Play-based curriculum, Individual attention, Festivals, Parent meetings, Qualified staff, Hygienic snacks.

ADMISSIONS: Open for 2025-26. Website ya phone pe contact karein.
CONTACT: sharmaaaarashi@gmail.com

Sirf school se related sawaal ka jawaab do. Baaki cheezo ke liye polite mana karo.`;

chatRouter.post("/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    logger.error("GROQ_API_KEY not set");
    res.status(500).json({ error: "Chatbot not configured" });
    return;
  }

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...(Array.isArray(history) ? history.slice(-10) : []),
    { role: "user", content: message },
  ];

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      logger.error({ status: response.status, err }, "Groq API error");
      res.status(500).json({ error: "Chatbot error" });
      return;
    }

    const data = (await response.json()) as {
      choices: { message: { content: string } }[];
    };
    const reply = data.choices[0]?.message?.content ?? "Sorry, I could not get a response.";
    logger.info("Chat response sent");
    res.json({ reply });
  } catch (err) {
    logger.error({ err }, "Chat fetch error");
    res.status(500).json({ error: "Chatbot error" });
  }
});

export default chatRouter;
