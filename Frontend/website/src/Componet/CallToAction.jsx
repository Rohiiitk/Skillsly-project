import React from 'react';



const CallToAction = () => {
    
    const ROCKET_URL = "/rocket.png"; 
    const CLOUD_URL = "/cloud1.png";
    const PAPER_URL = "/notepaper.png";
    const PINTACK_URL = "/pin.png";
    const R_URL = "https://placehold.co/30x30/000000/FFFFFF?text=R"; 

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden font-inter relative">
            
            {/* Custom Keyframes for Animations */}
            <style jsx="true">{`
                @keyframes cloudMove {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes rocketFly {
                    0% { transform: translate(0, 0) rotate(-15deg); }
                    25% { transform: translate(10px, -15px) rotate(-10deg); }
                    50% { transform: translate(-10px, -30px) rotate(-15deg); }
                    75% { transform: translate(5px, -40px) rotate(-10deg); }
                    100% { transform: translate(0, 0) rotate(-15deg); }
                }

                .animate-cloud {
                    animation: cloudMove 4s ease-in-out infinite;
                }
                .animate-rocket-fly {
                    animation: rocketFly 6s ease-in-out infinite;
                }
                
                /* Gradient Glow for background */
                .gradient-glow-bl {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(63, 255, 128, 0.4) 0%, transparent 70%);
                    opacity: 0.2;
                    filter: blur(80px);
                }
            `}</style>

            {/* Background Glow */}
            <div className="gradient-glow-bl"></div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* === LEFT COLUMN: Text and Buttons === */}
                <div className="relative z-10 space-y-8">
                    
                    {/* Sticky Note / Paper Graphic */}
                    <div className="relative w-[550px]   h-auto">
                        <img 
                            src={PAPER_URL} 
                            alt="Note paper background" 
                            className="w-[600px] h-auto object-contain"
                            style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
                            onError={(e) => e.target.src = 'https://placehold.co/400x300/F4F4F4/000000?text=Paper+Note'}
                        />
                        
                        {/* Pin Tack */}
                        <img 
                            src={PINTACK_URL} 
                            alt="Pin tack" 
                            className="absolute top-[-10px] left-[5%] w-8 h-8 object-contain"
                            onError={(e) => e.target.src = 'https://placehold.co/30x30/33A852/FFFFFF?text=P'}
                        />

                        {/* Text (Connect Collaborate Cultivate) - Positioned over paper */}
                        <div className="absolute inset-0 p-8 pt-10 flex flex-col justify-start items-start">
                            <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight ml-10 mt-10"
                                style={{
                                    lineHeight: '0.9', // Adjust line height to match image tight spacing
                                    background: 'linear-gradient(to bottom, #38CC85, #85F2C8)', // Gradient colors
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                Connect<br/>Collaborate<br/>Cultivate
                            </h1>
                        </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-gray-400 max-w-lg text-sm pt-8 m">
                        Connect with learners like you, collaborate to share skills, and cultivate new knowledge every session. With SkillSly, growth isn't a solo journey — it's a community effort. Join today and start building skills together.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 sm:flex-none px-8 py-3 text-lg font-semibold rounded-full text-white transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
                            style={{ 
                                background: 'linear-gradient(to bottom, #38CC85, #1E9E66)', 
                                boxShadow: '0 8px 15px rgba(56, 204, 133, 0.4)' 
                            }}>
                            REGISTER
                        </button>
                        <button className="flex-1 sm:flex-none px-8 py-3 text-lg font-semibold rounded-full text-white border-2 border-[#1E9E66] transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
                            style={{ 
                                background: 'linear-gradient(to bottom, #1E9E66, #147A4E)', 
                                boxShadow: '0 8px 15px rgba(30, 158, 102, 0.2)' 
                            }}>
                            EXPLORE
                        </button>
                    </div>
                </div>

                {/* === RIGHT COLUMN: Rocket and Clouds Animation === */}
                <div className="relative flex justify-center items-center h-full min-h-[400px]">
                    
                    {/* Cloud 1 (Top Right) */}
                    <img 
                        src={CLOUD_URL} 
                        alt="Cloud" 
                        className="absolute w-64 z-20 h-auto bottom-40 left-65 right-0 animate-cloud"
                        style={{ animationDelay: '0s', opacity: 0.9 }}
                        onError={(e) => e.target.src = 'https://placehold.co/300x200/FFFFFF/000000?text=Cloud'}
                    />

                    {/* Cloud 2 (Middle Left) */}
                    <img 
                        src={CLOUD_URL} 
                        alt="Cloud" 
                        className="absolute w-64  h-auto top-5 left-10 animate-cloud"
                        style={{ animationDelay: '2s', opacity: 0.9 }}
                        onError={(e) => e.target.src = 'https://placehold.co/300x200/FFFFFF/000000?text=Cloud'}
                    />

                    {/* Rocket Image with Flying Animation */}
                    <div className="absolute z-10" style={{ transform: 'rotate(-15deg)' }}>
                         <img 
                            src={ROCKET_URL} 
                            alt="3D Rocket" 
                            className="w-[90%]  h-[50%] animate-rocket-fly rotate-24"
                            onError={(e) => e.target.src = 'https://placehold.co/400x400/FF5733/FFFFFF?text=Rocket'}
                        />
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
