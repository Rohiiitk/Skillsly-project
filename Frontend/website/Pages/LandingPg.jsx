import Testimonial from "../src/Componet/Testimonial"
import FAQ from "../src/Componet/FAQ"
import WorkFlow from "../src/Componet/WorkFlow"
export default function LandingPg() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <WorkFlow />
            <Testimonial />
            <FAQ />
        </div>
    )
} 