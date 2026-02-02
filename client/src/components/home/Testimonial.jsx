import { BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

function Testimonial() {

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025',
            description: "I was getting rejected by ATS systems constantly. After using this AI builder, I landed 3 interviews in one week!"
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025',
            description: "The AI suggestions for bullet points were a game changer. It helped me quantify my achievements perfectly."
        },
        {
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
            name: 'Arjun Patel',
            handle: '@arjun_tech',
            date: 'June 2, 2025',
            description: "As a fresh grad, I didn't know how to structure my CV. This tool built a professional resume for me in minutes."
        },
        {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
            name: 'Priya Sharma',
            handle: '@priya_designs',
            date: 'June 15, 2025',
            description: "The real-time scoring feature told me exactly what keywords I was missing. Finally cracked the code for big tech companies!"
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025',
            description: "I love how I can tailor my resume for specific job descriptions with just one click. It saves me hours of manual editing."
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
            name: 'Rohan Gupta',
            handle: '@rohan_dev',
            date: 'July 1, 2025',
            description: "The cover letter generator is surprisingly human-like. It matched the tone of my resume perfectly."
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Liam Chen',
            handle: '@liam_c',
            date: 'May 22, 2025',
            description: "Simple, fast, and effective. The formatting is always perfect, no matter how much content I add or remove."
        },
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
            name: 'Ananya Singh',
            handle: '@ananya_s',
            date: 'July 12, 2025',
            description: "I got a callback within 24 hours of applying. The 'ATS-Friendly' promise is actually real. Highly recommended!"
        },
        {
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200',
            name: 'Sofia Martinez',
            handle: '@sofia_m_ui',
            date: 'August 3, 2025',
            description: "I'm a designer, so aesthetics matter. The templates are clean, modern, and passed every automated screening tool."
        },
        {
            image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200',
            name: 'Vikram Malhotra',
            handle: '@vikram_exec',
            date: 'August 10, 2025',
            description: "Targeting executive roles is tough. The AI helped me translate my daily tasks into high-level leadership metrics."
        },
        {
            image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200',
            name: 'Emily Davis',
            handle: '@emily_intern',
            date: 'July 20, 2025',
            description: "I had zero experience for my internship application. The tool helped me highlight my academic projects professionally."
        },
        {
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
            name: 'Kabir Das',
            handle: '@kabir_pivot',
            date: 'August 15, 2025',
            description: "Switching from sales to marketing was scary. The AI rewrote my skills to match the industry lingo perfectly."
        },
        {
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200',
            name: 'Lucas Silva',
            handle: '@lucas_code',
            date: 'June 28, 2025',
            description: "My English isn't perfect, but this tool polished my grammar and made me sound like a native corporate professional."
        },
        {
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200',
            name: 'Meera Reddy',
            handle: '@meera_hr',
            date: 'July 5, 2025',
            description: "I used the content generation to rewrite my LinkedIn headline and summary too. My profile views are up 200%."
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Daniel Kim',
            handle: '@dan_kim',
            date: 'August 1, 2025',
            description: "Needed a resume for a last-minute job opening. I went from blank page to PDF download in literally 15 minutes."
        },
        {
            image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200',
            name: 'Saanvi Kulkarni',
            handle: '@saanvi_dev',
            date: 'August 18, 2025',
            description: "I had a 2-year career gap and didn't know how to explain it. The AI framed it perfectly as a 'sabbatical for upskilling'."
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'David Ross',
            handle: '@dross_marketing',
            date: 'July 29, 2025',
            description: "The 'Job Description Match' feature is magic. It highlighted exactly which skills I needed to add to get passed the screener."
        },
        {
            image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200',
            name: 'Ishaan Verma',
            handle: '@ishaan_v',
            date: 'September 2, 2025',
            description: "Applying for my first job was stressful until I found this. The fresher templates are clean, professional, and impactful."
        },
        {
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200',
            name: 'Sarah Jenkins',
            handle: '@sarah_j_hr',
            date: 'August 22, 2025',
            description: "As a former recruiter, I can tell this tool knows what it's doing. The hierarchy and readability are spot on."
        },
        {
            image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200',
            name: 'Rahul Nair',
            handle: '@rahul_remote',
            date: 'July 14, 2025',
            description: "Targeting remote US jobs from India was tough. This builder helped me format my location and visa status correctly."
        },
        {
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200',
            name: 'Elena Rodriguez',
            handle: '@elena_r',
            date: 'June 30, 2025',
            description: "I used to spend hours fighting with Word margins. Now I just type, click 'Download PDF', and it looks perfect every time."
        },
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
            name: 'Fatima Al-Sayed',
            handle: '@fatima_tech',
            date: 'August 5, 2025',
            description: "The keyword optimization is real. My application view rate on LinkedIn went up by 40% after using this resume."
        },
        {
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200',
            name: 'Amit Singh',
            handle: '@amit_singh_ux',
            date: 'September 10, 2025',
            description: "Ideally suited for creative fields too. I got a clean, minimalist layout that showcased my portfolio link prominently."
        },
        {
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
            name: 'Grace O\'Malley',
            handle: '@grace_om',
            date: 'July 8, 2025',
            description: "I didn't realize how weak my action verbs were. The AI suggested 'Orchestrated' instead of 'Led' and it made a huge difference."
        },
        {
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200',
            name: 'Kiran Desai',
            handle: '@kiran_finance',
            date: 'August 25, 2025',
            description: "Landed a Senior Analyst role at a Big 4 firm. The tool helped me condense 10 years of experience into a readable 1-page summary."
        }
    ];
const reversedCardsData = [...cardsData].reverse();
    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white/70">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">{card.description}</p>
            <div className="flex items-center justify-between text-slate-500 text-xs">
                <div className="flex items-center gap-1">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" className="hover:text-sky-500">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );
    return (
        <>
            <div id='testimonials' className='flex flex-col items-center justify-center py-20'>
                <div className='flex items-center justify-center gap-2 text-sm text-white bg-blue-400/10 rounded-full px-6 py-1.5'>
                    <BookUserIcon className='size-4.5 stroke-green-600' />
                    <span>Testimonials</span>
                </div>
                <Title title="Don't just take our words" description="Hear what our users sap about us . We're always looking for ways to improve. If you have a positive experience with us, leave a review." />
            </div>
            <div className="marquee-row w-screen overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                <div className="marquee-inner flex transform-gpu w-max pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
            </div>

            <div className="marquee-row w-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu w-max pt-10 pb-5">
                    {[...reversedCardsData, ...reversedCardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
            </div>
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 200s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
        </>
    )
}

export default Testimonial