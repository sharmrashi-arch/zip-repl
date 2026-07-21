import { motion } from "framer-motion"
import { Button } from "./ui/button"
import heroImage from "@assets/generated_images/hero.jpg"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
            Welcome to Anjali Kids
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6">
            Play. <br />
            <span className="text-primary">Explore.</span> <br />
            Learn.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed max-w-lg">
            A nurturing and stimulating environment where young minds blossom. Give your child the perfect start in Pundri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="#admissions">Enroll Your Child</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white border-2">
              <a href="#programs">Discover Programs</a>
            </Button>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['NS', 'JT', 'BS', 'JG'].map((initials, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-xs">
                   {initials}
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <div className="flex text-amber-400">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <span className="text-muted-foreground">5-Star Google Rated</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-full z-10">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-3 scale-105 opacity-20 -z-10 blob-shape transition-transform duration-500 hover:rotate-6" />
            <div className="absolute inset-0 bg-primary rounded-[3rem] -rotate-3 scale-100 opacity-20 -z-10 blob-shape-2 transition-transform duration-500 hover:-rotate-6" />
            <img
              src={heroImage}
              alt="Happy children playing at Anjali Kids"
              className="w-full h-full object-cover rounded-[3rem] shadow-xl blob-shape"
            />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                2.5
              </div>
              <div>
                <p className="font-bold text-foreground leading-tight">Years to</p>
                <p className="text-muted-foreground text-sm font-medium">4.5 Years Old</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
