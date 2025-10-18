import React from "react"

export default function WorkFlow() {
    return (
        <section className="bg-black py-10 pb-30 overflow-hidden text-center">
            <div className="flex flex-col items-center mx-auto text-center gap-10">
                <h1 className="flex text-5xl text-white font-semibold">
                    How SkillSly
                    <span className="bg-[radial-gradient(ellipse_at_center,_#4DDCB7_0%,_#B8FB70_100%)] pl-3 bg-clip-text text-transparent">
                        Works ?
                    </span>
                </h1>
                <p className="w-3/5 mx-auto text-white z-20">SkillSly has made  working on these platform smooth as butter. some steps are listed down  which makes the process more simpler</p></div>

            <div className="bg-[#4DDCB7] blur-2xl rounded-full z-10 w-96 h-92 gap-10 -mt-30 -ml-20"></div>
            <div className="flex flex-wrap w-5/6 -mt-40 h-fit gap-10 justify-center mx-auto">
                <div className="w-3/10 h-90 z-30 bg-[#292524] p-2 rounded-lg">
                    <div className="flex p-3 items-start justify-evenly gap-15 text-white">
                        <h2 className="text-xl">Login / Register Yourself</h2>
                        <p className="text-6xl font-bold">1</p>
                    </div>
                    <p className="w-4/6 pl-5 -mt-3 text-left text-xs text-white">Create a Profile or make one by giving some basic info like name, email and password Then Fill all the personal info  regarding skills, description and some work proof.</p>
                    <div className="relative">
                        <img src="/login.png" alt="login page" className="w-2/3 h-auto z-30 mt-15 pl-5" />
                    </div>
                    <img src="/skillpg.png" alt="skill adding page" className="w-3/5 h-auto z-10 ml-38 -mt-40" />
                </div>
                <div className="w-3/10 h-90 z-30 bg-[#292524] p-2 rounded-lg">
                    <div className="flex p-3 items-start justify-evenly gap-15 text-white">
                        <h2 className="text-xl">Find a Skill Category</h2>
                        <p className="text-6xl font-bold">2</p>
                    </div>
                    <p className="w-4/6 pl-5 -mt-3 text-left text-xs text-white">Skillsly Provides two ways to access Skill category one is through search and the other way is to select from top reccomendation which is based on prefrence</p>
                    <img src="/arrow1.png" alt="arroe pointing" className="w-20 h-auto ml-60 -mt-20 z-20 relative rotate-6 scale-90" />
                    <img src="/skillsly-dashboard.png" alt="" className="-mt-30 mx-auto shadow-2xl z-10 scale-60 -rotate-12" />
                    <img src="/arrow2.png" alt="second arrow pointing" className="w-25 h-auto ml-5 -mt-55 -rotate-[20deg] scale-90" />
                </div>
                <div className="w-3/10 h-90 z-30 bg-[#292524] p-2 rounded-lg">
                    <div className="flex p-3 items-start justify-evenly gap-15 text-white">
                        <h2 className="text-xl">Try & Find for a match </h2>
                        <p className="text-6xl font-bold">3</p>
                    </div>
                    <p className="w-4/6 pl-5 -mt-3 text-left text-xs text-white">In skill category there are rankings based on ratings of the user and you can also  message other user to convey message in these way you can match with other user for skill swapping</p>
                    <img src="/cursor.png" alt="a cursor" className="scale-50 -ml-10 z-20 relative" />
                    <img src="/ranking.png" alt="rankings" className="scale-60 -ml-5 -mt-50 z-10" />
                    <img src="/chat.png" alt="chat icon" className="-mt-100 ml-30 scale-60" />
                </div>
                <div className="w-7/15 h-90 p-2 bg-[#292524] rounded-lg">
                    <div className="flex p-3 items-start justify-evenly gap-45 text-white">
                        <h2 className="text-xl">Connect & Schedule Sessions </h2>
                        <p className="text-6xl font-bold">4</p>
                    </div>
                    <p className="w-5/6 pl-5 -mt-3 text-left text-xs text-white">After the user accepts the request , a group  of two is formed where you can chat and schedule session with the other member of the group . These helps user to share knowledge efficiently.</p>
                    <img src="/group.png" alt="group" className="-rotate-12 scale-110 w-1/3 ml-20 mt-10 shadow-[0_20px_20px_rgba(0,0,0,0.7)] z-20 relative" />
                    <img src="/group-layout.png" alt="group" className="rotate-12 scale-110 w-1/3 ml-70 -mt-35 z-10" />
                </div>
                <div className="w-7/15 h-90 p-2 z-30 bg-[#292524] rounded-lg">
                    <div className="flex p-3 items-start justify-evenly gap-55 text-white">
                        <h2 className="text-xl">Use Video call & swap skills</h2>
                        <p className="text-6xl font-bold">5</p>
                    </div>
                    <p className="w-5/6 pl-5 -mt-3 text-left text-xs text-white">Skillsly provides video call option after scheduling session where’in you can use use our notes section to save any important points which you can go back
                        in notes section and access it and Dont forget to rate your mentor for his/her teaching.</p>
                </div>
            </div>
            <div className="bg-[#4DDCB7] blur-2xl rounded-full z-10 w-96 h-92 -mt-20 -mb-50 ml-[80%]"></div>
        </section>
    )
}