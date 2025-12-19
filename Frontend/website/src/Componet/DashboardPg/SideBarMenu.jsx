import { LogOut, User } from "lucide-react";
import { Search, Users, Notebook, MessageSquare } from "lucide-react";

export default function SideBarMenu() {

    const buttonInfo = [
        {
            icon: Search,
            text: 'Search Skill'
        },
        {
            icon: Users,
            text: 'Groups'
        },
        {
            icon: Notebook,
            text: 'Saved Notes'
        },
        {
            icon: MessageSquare,
            text: 'Messages'
        }
    ]

    return (
        <div className="w-1/5 h-dvh fixed top-0 left-0 flex flex-col bg-[#0d0d0d] text-white">
            <div className="flex flex-col items-center py-8 border-b border-gray-800">
                <div className="relative w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-700 mb-3">
                    {/* Placeholder for Profile Image - Redirects to Profile view */}
                    <button
                        // onClick={() => setActiveItem('profile')}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <User className="w-16 h-16 text-gray-300 opacity-70" />
                    </button>
                </div>
                <p className="text-lg font-semibold mb-3">User Name</p>
                <button
                    // onClick={() => setActiveItem('profile')}
                    className={`text-sm rounded-full px-4 py-1 transition-colors bg-transparent hover:text-teal-600 hover:border-teal-600 text-white border border-gray-600 hover:bg-gray-700'
                                }`}
                >
                    Profile
                </button>
            </div>
            <div className="flex flex-col justify-between flex-grow mt-6">
                <div className="space-y-1">
                    {buttonInfo.map((info, index) => {
                        const Icon = info.icon;

                        return (
                            <button
                                key={index}
                                className="w-full flex gap-5 py-3 items-center justify-start mx-8 cursor-pointer"
                            >
                                <Icon className="w-5 h-5" />
                                <span>{info.text}</span>
                            </button>
                        );
                    })}
                </div>
                <div className="p-8">
                    <button className="w-full h-12 hover:text-red-500 hover:bg-red-300/20 cursor-pointer flex gap-5 text-center justify-center items-center"><LogOut />Log Out</button>
                </div>
            </div>
        </div>
    )
}