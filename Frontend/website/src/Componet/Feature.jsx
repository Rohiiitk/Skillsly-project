import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import CardSwap, { Card } from '../components/CardSwap'
import CountUp from '../components/CountUp'
import { Video } from 'lucide-react';

export default function Feature() {

    const cards = [
        {
            title: "Connect with peers Through Video Chat!",
            desc: "Video chat provides Users with a medium to connect with other Users and can eases the process of swapping knowledge.",
            bg: "linear-gradient(135deg, #34d399, #60a5fa)"
        },
        {
            title: "Real-time Chat & request Schedule",
            desc: "Personalized learning paths and skill suggestions based on your interests, career goals, and market trends.",
            bg: "linear-gradient(135deg, #a78bfa, #f472b6)"
        },
        {
            title: "Gamification of The process",
            desc: "Earn points, unlock badges, and level up as you learn. Track progress with engaging achievements and leaderboards.",
            bg: "linear-gradient(135deg, #fbbf24, #f97316)"
        },
        {
            title: "Save Notes simeltenously during the session",
            desc: "Notes can be saved during the session these notes can be later accessed through our “saved notes” section , helping to learn more efficiently and making the process more smooth.",
            bg: "linear-gradient(135deg, #fbbf24, #f97316)"
        }
    ];

    return (
        <div className="w-full h-full bg-gradient-to-b from-[#292524] to-[#000000] overflow-hidden pt-20 pb-40 text-center">
            <div className="bg-[#4DDCB7] blur-3xl rounded-full ml-[78%] -mt-30 z-10 w-96 h-92 gap-10 "></div>
            {/* <div className="w-full flex flex-col -mt-52 gap-10 justify-center items-center">
                <h1 className="text-5xl text-white font-semibold">
                    Why Use
                    <span className="bg-gradient-to-t from-[#4DDCB7] to-[#B8FB70] pl-3 bg-clip-text text-transparent">
                        Skillsly ?
                    </span>
                </h1>
                <p className="text-sm w-3/5 text-white font-light">SkillSly isn’t just another learning platform — it’s a place where knowledge flows both ways. You canexchange skills directly with the  thought full features provided.</p>
            </div>
            <div className='text-white w-full'>
                <ScrollStack
                    useWindowScroll
                    itemDistance={20}
                    itemStackDistance={30}
                    stackPosition="20%"
                    baseScale={0.85}
                >
                    {cards.map((item, index) => (
                        <ScrollStackItem key={index}>
                            <div
                                className="w-full h-full rounded-[32px] p-10 text-left text-white flex flex-col justify-center"
                                style={{ background: item.bg }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">
                                    {item.title}
                                </h1>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>

            </div > */}
            <div className='flex items-center -mt-60 py-10 mx-10'>
                <div className="flex flex-col items-start text-center">
                    <div className='w-2/3 -ml-4 flex flex-col items-center gap-10'>
                        <h1 className="text-5xl text-white font-semibold">
                            Why Use
                            <span className="bg-gradient-to-t from-[#4DDCB7] to-[#B8FB70] pl-3 bg-clip-text text-transparent">
                                Skillsly ?
                            </span>
                        </h1>
                        <p className="text-sm w-6/8 text-white font-light">SkillSly is more than just a learning platform — it’s a peer-to-peer ecosystem where skills are exchanged, not just consumed. Instead of one-way courses, SkillSly connects learners and mentors directly, allowing users to teach what they know and learn what they need in real time.</p>
                    </div>

                    <div className='w-5/8 text-white flex justify-center gap-35 items-center text-5xl mt-30'>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <CountUp
                                    from={0}
                                    to={100}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />%
                            </div>
                            <h2 className='text-slate-400 text-lg'>Customer <br /> Satisfication</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <CountUp
                                    from={100}
                                    to={0}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                            </div>
                            <h2 className='text-slate-400 text-lg pt-2'>Registered <br />Users</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <CountUp
                                    from={100}
                                    to={10}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </div>
                            <h2 className='text-slate-400 text-lg'>Skill <br />Categories</h2>
                        </div>
                    </div>
                </div>
                <div style={{ color: 'white', height: '400px', position: 'relative' }}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={2000}
                        pauseOnHover={true}
                        easing='linear'
                        skewAmount={6}
                    >
                        <Card>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col py-2 border-b-2 border-white items-start gap-10 p-5'>
                                    <h3 className='flex w-full justify-center items-end gap-5'><Video size={25} className='ml-2' />| <span className=''>Video Chat To Connect</span></h3>
                                </div>
                                <div className='px-5 w-2/3 text-start'>
                                    <p>Video chat provides Users with a medium to connect with other Users and can eases the process of swapping knowledge.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <h3>Card 2</h3>
                            <p>Your content here</p>
                        </Card>
                        <Card>
                            <h3>Card 3</h3>
                            <p>Your content here</p>
                        </Card>
                        <Card>
                            <h3>Card 3</h3>
                            <p>Your content here</p>
                        </Card>
                    </CardSwap>
                </div>
            </div>
        </div >
    )
}