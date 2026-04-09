**[Experience the LIVE DEMO Here](https://airesumebuilder-frontend-3mmc.onrender.com/app)**

Full Stack AI Resume Builder
A comprehensive, end-to-end MERN stack application that allows users to create professional, ATS-friendly resumes with real-time previews. This project leverages artificial intelligence to optimize content and utilizes specialized media services for seamless image processing.

✨ Features
Secure User Authentication: Complete sign-up and login functionality to protect user data and save resume progress.

Dynamic Resume Building: A responsive, multi-step form system handling personal details, professional summaries, experience, education, projects, and skills.

AI-Powered Content Generation: Integrates Google Gemini AI to automatically enhance and optimize professional summaries and job descriptions for maximum impact.

Advanced Media Processing: Utilizes ImageKit for profile photo uploads, featuring real-time background removal and automated media optimization.

Live Preview & Sharing: A split-screen interface providing a real-time preview of the ATS-friendly template as data is entered, complete with the ability to generate live, shareable links.

🛠️ Tech Stack
Frontend

React: For building a dynamic and component-driven user interface.

Tailwind CSS: For rapid, responsive styling and clean UI/UX design (including modal windows and form feedback).

Backend & Database

Node.js & Express: For handling secure API routes and business logic.

MongoDB: NoSQL database for flexible and scalable data schema management.

Third-Party Services & Integrations

Google Gemini API: Large Language Model (LLM) integration for structured, ATS-compliant text generation.

ImageKit: Offloading heavy media processing tasks (compression, background removal) to keep the backend lean.

Deployment & DevOps

VPS Hosting: Live production deployment on Hostinger VPS.

Security: SSL certificate configuration via Certbot.

🧠 Technical Architecture & Engineering Decisions
This project addresses several complex engineering challenges:

State Management Strategy: Efficiently managing complex, nested state across multiple sections of a long, multi-step form to ensure a smooth, lag-free user experience.

Asynchronous API Handling: Implementing robust loading states and custom hooks to manage asynchronous requests to the Gemini AI API, keeping the UI highly responsive while waiting for LLM generation.

System Prompt Engineering: Crafting highly specific system prompts for Gemini to ensure the AI returns strictly structured, ATS-compliant data without conversational filler or hallucinations.

Scalable Architecture: Delegating intensive media processing to ImageKit rather than processing images natively on the Express server, ensuring backend scalability and faster load times.

End-to-End Ownership: Complete lifecycle management from local development to configuring domain names, reverse proxies, and securing the VPS environment for production.

🚀 Getting Started (Local Development)
Prerequisites
Node.js (v16+)

MongoDB Instance (Local or Atlas)

Google Gemini API Key

ImageKit Account & API Keys

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
Install Frontend Dependencies:

Bash
cd client
npm install
Install Backend Dependencies:

Bash
cd ../server
npm install
Environment Variables:
Create a .env file in the server directory and configure the following:

Code snippet
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
Run the Application:
Open two terminals.
Terminal 1 (Backend):

Bash
cd server
npm run dev
Terminal 2 (Frontend):

Bash
cd client
npm run dev
👨‍💻 Developed By
Vipin Raj
