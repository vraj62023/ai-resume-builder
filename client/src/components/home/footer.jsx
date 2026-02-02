import React from 'react';
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
        
        <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black border-t border-gray-800">
            <div className="flex flex-wrap items-start gap-5 md:gap-[30px] xl:gap-[100px]">
                 <a href="#" className="flex-shrink-0">
                         <img src={logo} alt="logo" className="w-40"/>
                </a>
                
                {/* Column 1: Product Features */}
                <div>
                    <p className="text-slate-100 font-semibold">Platform</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/builder" className="hover:text-indigo-400 transition">Resume Builder</a></li>
                        <li><a href="/templates" className="hover:text-indigo-400 transition">Professional Templates</a></li>
                        <li><a href="/cover-letter" className="hover:text-indigo-400 transition">Cover Letter Gen</a></li>
                        <li><a href="/ats-check" className="hover:text-indigo-400 transition">ATS Scorer</a></li>
                    </ul>
                </div>

                {/* Column 2: Resources & Career */}
                <div>
                    <p className="text-slate-100 font-semibold">Resources</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/blog" className="hover:text-indigo-400 transition">Career Blog</a></li>
                        <li><a href="/examples" className="hover:text-indigo-400 transition">Resume Examples</a></li>
                        <li><a href="/interview-prep" className="hover:text-indigo-400 transition">Interview Tips</a></li>
                        <li>
                            <a href="/careers" className="hover:text-indigo-400 transition flex items-center">
                                Join Us <span className="text-[10px] text-white bg-indigo-600 rounded-md ml-2 px-1.5 py-0.5 font-medium">Hiring</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div>
                    <p className="text-slate-100 font-semibold">Legal</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-indigo-400 transition">Terms of Service</a></li>
                        <li><a href="/cookies" className="hover:text-indigo-400 transition">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Right Side: Description & Socials */}
            <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                <p className="max-w-xs text-right max-md:text-center leading-relaxed">
                    Build professional, ATS-friendly resumes in minutes using the power of AI. Land your dream job faster.
                </p>
                <div className="flex items-center gap-4 mt-3">
                    
                    {/* GitHub Link */}
                    <a href="https://github.com/vraj62023/ai-resume-builder" target="_blank" rel="noreferrer" className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 group-hover:text-white transition-colors">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                    </a>

                    {/* LinkedIn Link */}
                    <a href="https://www.linkedin.com/in/vipin-raj-920aa631b/" target="_blank" rel="noreferrer" className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 group-hover:text-blue-400 transition-colors">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    {/* X / Twitter Link */}
                    <a href="https://x.com" target="_blank" rel="noreferrer" className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 group-hover:text-white transition-colors">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </a>
                </div>
                <p className="mt-3 text-center">© 2025 AI Resume Builder. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer