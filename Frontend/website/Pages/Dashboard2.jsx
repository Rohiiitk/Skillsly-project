import Profile from "../src/Componet/DashboardPg/Profile"
import SideBarMenu from "../src/Componet/DashboardPg/SideBarMenu"

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-4/9">
                <SideBarMenu />
            </div>
            <div className="overflow-hidden">
                <Profile />
            </div>
        </div>
    )
}