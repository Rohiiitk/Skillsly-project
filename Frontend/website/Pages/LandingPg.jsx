import Testimonial from "../src/Componet/Testimonial"
import FAQ from "../src/Componet/FAQ"
import WorkFlow from "../src/Componet/WorkFlow"
import SkillSlyHeroPage from "../src/Componet/SkillSlyHeroPage"
import CallToAction from "../src/Componet/CallToAction"
import Footer from "../src/Componet/Footer"
import Feature from "../src/Componet/Feature"
export default function LandingPg() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <SkillSlyHeroPage />
            <Feature />
            <WorkFlow />
            <Testimonial />
            <CallToAction />
            <FAQ />
            <Footer />
        </div>
    )
} 