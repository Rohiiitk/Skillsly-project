import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import { User } from "lucide-react";

export default function Profile() {

    const userSkills = ["Python", "Editing", "Java", "Guitar"];

    const workProof = [
        {
            src: '/parnesh.png'
        },
        {
            src: '/parnesh.png'
        },
        {
            src: '/parnesh.png'
        },

        {
            src: '/parnesh.png'
        },
        {
            src: '/parnesh.png'
        },
        {
            src: '/parnesh.png'
        }
    ]


    return (
        <section className="w-full h-full bg-black flex pt-5 px-10 flex-col">
            <div className="p-6 md:p-10 w-full h-full">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-15 mb-12">

                    {/* Left Column: Avatar & Skills */}
                    <div className="flex flex-col items-center md:items-center min-w-[150px]">
                        <div className="relative w-32 h-32 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-700 mb-6">
                            <User className="absolute inset-0 m-auto w-24 h-24 text-white" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 w-full max-w-[150px]">
                            {userSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="text-xs text-center font-medium text-white bg-[#1a1a1a] py-2 px-3 rounded-md border border-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details & Badges */}
                    <div className="flex-grow text-white">
                        <h1 className="text-3xl font-semibold text-white mb-4">Rohit</h1>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Creative technologist with a passion for storytelling and automation. Skilled in video editing and Python programming, blending visual artistry with smart scripting to produce engaging content and efficient workflows. Would you like a version tailored for LinkedIn, a portfolio site, or a resume? I can tweak the tone and format to fit.
                        </p>

                        <div className="flex gap-3">
                            <p>Languages known :</p>
                            <p className="pb-5">English , Hindi , Kannada , Konkani</p>
                        </div>

                        {/* Placeholder Link/URL */}
                        <p className="text-sm cursor-pointer text-teal-400 mb-8 truncate">
                            https://www.figma.com/design/Q7hZykJTikcwal1sxcl/SkillSly-web-Design?node-id=0-1&p=&t=JfDfJdvbxhNDNmkw-0
                        </p>

                        {/* Badges */}
                        <h2 className="text-xl font-medium text-white mb-4">Badges</h2>
                        <div className="flex space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit overflow-hidden">
                    <Carousel>
                        <CarouselContent className="px-1 sm:px-5 space-x-5 flex items-end">
                            {workProof.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-[100%] sm:basis-2/5 transition-transform object-fill duration-300 ease-in-out"
                                >
                                    <img
                                        src={item.src}
                                        alt="Work Done"
                                        width={50}
                                        height={100}
                                        className="rounded-lg object-cover h-82 w-full"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}