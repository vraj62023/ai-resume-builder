import React from 'react';
import { Sparkles, ScanSearch, Target, FileText, Layout, BarChart3 } from 'lucide-react';
import Title from './Title';

function Features() {
    const featuresData = [
        {
            icon: <Sparkles className="text-white w-6 h-6" />,
            title: "AI Content Writer",
            description: "Stop staring at a blank page. Let AI generate professional summaries and achievement-driven bullet points tailored to your role."
        },
        {
            icon: <ScanSearch className="text-white w-6 h-6" />,
            title: "ATS Optimization",
            description: "Beat the bots. Our templates are engineered to pass Applicant Tracking Systems so your resume actually reaches human recruiters."
        },
        {
            icon: <Target className="text-white w-6 h-6" />,
            title: "Job Description Match",
            description: "Paste the job URL, and we'll tailor your resume skills and keywords to match exactly what that specific employer is looking for."
        },
        {
            icon: <BarChart3 className="text-white w-6 h-6" />,
            title: "Real-Time Scoring",
            description: "Get instant feedback on your resume's strength. We analyze readability, impact, and completeness to give you a competitive score."
        },
        {
            icon: <FileText className="text-white w-6 h-6" />,
            title: "Cover Letter Generator",
            description: "Instantly generate a personalized cover letter that matches your resume's design and aligns perfectly with the company's tone."
        },
        {
            icon: <Layout className="text-white w-6 h-6" />,
            title: "One-Click Reformatting",
            description: "Switch between professional, creative, or executive templates instantly without ever having to fix margins or spacing manually."
        }
    ];

    return (
        <div id='features'>
            <style>
                {`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                * { font-family: "Poppins", sans-serif; }`}
            </style>

            <section className="py-20 px-4 bg-black/50 flex flex-col justify-center items-center gap-6">
                <button className='px-4 h-8 border border-gray-800 text-slate-200 text-xs rounded-lg uppercase tracking-wider'>
                    Why Choose Us
                </button>
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-white border border-gray-300 text-sm">
                    <div className="flex items-center">
                        <img className="w-7.5 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <img className="w-7.5 rounded-full border-3 border-white -translate-x-2"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <img className="w-7.5 rounded-full border-3 border-white -translate-x-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="-translate-x-2">Trusted by 10,000+ people</p>
                </div>
                <Title title='Build Your Dream Resume in Minutes, Not Hours.' description=' Leverage the power of AI to craft professional, ATS-optimized resumes that stand out to recruiters and land you more interviews.' />

                <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {featuresData.map((feature, index) => (
                        <div key={index} className='bg-gradient-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-6 space-y-3 hover:-translate-y-1 transition duration-300 group'>
                            <div className="p-2 bg-white/5 w-fit rounded-lg border border-white/10">
                                {feature.icon}
                            </div>
                            <p className='font-medium text-lg text-gray-100 group-hover:text-indigo-400 transition-colors'>
                                {feature.title}
                            </p>
                            <p className='text-sm/6 text-gray-300'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Features