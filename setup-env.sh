#!/bin/bash
# Auto-generates .env file from Replit Secrets at startup
cat > .env << EOF
RESEND_API_KEY=${RESEND_API_KEY}
GROQ_API_KEY=${GROQ_API_KEY}
SESSION_SECRET=${SESSION_SECRET}
EOF
echo ".env file ready!"
