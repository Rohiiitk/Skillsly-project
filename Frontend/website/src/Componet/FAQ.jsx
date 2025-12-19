import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

export default function FAQ() {
    const FAQS = [
        {
            q: ' Can i register on SkillSly with my google account ?',
            a: 'p eh eh from poiguin'
        },
        {
            q: 'Can we register as a teacher only ?',
            a: 'p eh eh from poiguin'
        },
        {
            q: 'Can i schedule and manage multiple sessions ?',
            a: 'p eh eh from poiguin'
        },
        {
            q: 'How do i access video call on the website ?',
            a: 'p eh eh from poiguin'
        },
        {
            q: 'what is the use of badges in the profile ?',
            a: 'p eh eh from poiguin'
        },
    ]
    return (
        <section className="bg-gradient-to-b from-[#000000] to-[#292524] w-full h-full flex flex-col justify-start py-20 items-center gap-20" id="FAQ">
            <h1 className="flex flex-col items-center text-5xl text-white"><span className="bg-[radial-gradient(ellipse_at_center,_#4DDCB7_0%,_#B8FB70_100%)] bg-clip-text font-bold text-transparent">FAQ'S</span>Section</h1>
            <div className="text-white w-2/4 h-auto">
                <Accordion type="single" collapsible>
                    {FAQS.map((value, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{value.q}</AccordionTrigger>
                            <AccordionContent>
                                {value.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}