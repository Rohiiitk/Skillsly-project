import { useState } from "react";
import Stepper, { Step } from "../../components/Stepper"

export default function SignUpInfo() {

    const skillsList = ["React", "Node", "MongoDB", "UI/UX", "Figma"];

    const [skillsKnown, setSkillsKnown] = useState([]);
    const [skillWantToKnow, setSkillWantToKnow] = useState([])

    const toggleSkill = (skill) => {
        setSkillsKnown(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    const toggleSkillWantToKnow = (skill) => {
        setSkillWantToKnow(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };
    return (
        <div className="flex h-fit justify-between items-center w-full">

            <Stepper
                initialStep={1}
                onStepChange={(step) => {
                    console.log(step);
                }}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="Previous"
                nextButtonText="Next"
            >
                <Step>
                    <div className="w-full h-auto flex flex-col gap-10">
                        <h2>Welcome! Enter The Skills as per Needs </h2>
                        <input
                            type="hidden"
                            name="skillsKnown"
                            value={skillsKnown.join(",")}
                        />
                        <div className="flex flex-col gap-3 justify-center">
                            <h2 className="pl-2">Select The Skills <span className="text-green-400">You</span> Know :</h2>
                            <div className="flex flex-wrap gap-3 text-black">
                                {skillsList.map(skill => (
                                    <button
                                        type="button"
                                        key={skill}
                                        onClick={() => toggleSkill(skill)}
                                        className={`px-4 py-2 rounded-full text-sm border transition
                                                ${skillsKnown.includes(skill)
                                                ? "bg-green-500 text-black border-green-500"
                                                : "bg-transparent text-black border-gray-500 hover:border-green-400"
                                            }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex flex-wrap gap-3 text-black">
                        <input
                            type="hidden"
                            name="skillsKnown"
                            value={skillWantToKnow.join(",")}
                        />
                        {skillWantToKnow.map(skill => (
                            <button
                                type="button"
                                key={skill}
                                onClick={() => toggleSkill(skill)}
                                className={`px-4 py-2 rounded-full text-sm border transition
                                                ${skillsKnown.includes(skill)
                                        ? "bg-green-500 text-black border-green-500"
                                        : "bg-transparent text-black border-gray-500 hover:border-green-400"
                                    }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </Step>
                <Step>
                    <h2>How about an input?</h2>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
                </Step>
                <Step>
                    <h2>Final Step</h2>
                    <p>You made it!</p>
                </Step>
            </Stepper>


            <img src="/parnesh.png" alt="person loging in" className="w-2/6 h-dvh" />

        </div>
    )
}

