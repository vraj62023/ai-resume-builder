import React from 'react'
import { Github, Linkedin, ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom' // Assuming you use React Router

function CallToAction() {
  return (
    <div id='contact' className='w-[90%] max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-10 mb-20'>
        
        {/* Main Container */}
        <div className="border border-gray-800 bg-black/40 backdrop-blur-md relative overflow-hidden rounded-2xl">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90rem] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Grid Layout: Stacks on mobile, Side-by-side on Desktop */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                
                {/* SECTION 1: GET STARTED (Primary) */}
                <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium w-fit mx-auto md:mx-0">
                            <FileText className="w-3.5 h-3.5" />
                            <span>ATS-Friendly Resume Builder</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Ready to launch your career?
                        </h2>
                        <p className="text-base text-gray-400 max-w-md mx-auto md:mx-0">
                            Create a professional, data-driven resume in minutes. No sign-up fees, no hidden costs.
                        </p>
                    </div>
                    
                    <Link 
                        to="/app" 
                        className="group inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-8 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-fit"
                    >
                        Get Started Now
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* SECTION 2: COMMUNITY (Secondary) */}
                <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                            Join the Community
                        </h2>
                        <p className="text-base text-gray-400 max-w-md mx-auto md:mx-0">
                            We are open-source. Star the repo to support us, or connect on LinkedIn for updates.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                        {/* GitHub */}
                        <a 
                            href="https://github.com/vraj62023/ai-resume-builder" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group flex items-center justify-center gap-2 rounded-lg py-3 px-6 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white font-medium w-full sm:flex-1 shadow-lg shadow-indigo-500/20"
                        >
                            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span>Star Repo</span>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/vipin-raj-920aa631b/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group flex items-center justify-center gap-2 rounded-lg py-3 px-6 border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all duration-300 text-gray-200 font-medium w-full sm:flex-1"
                        >
                            <Linkedin className="w-5 h-5 text-blue-400" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CallToAction