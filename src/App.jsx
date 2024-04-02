import { NavigationBar } from "@/NavigationBar"
import { Intro } from "@/Intro"
import { About } from "@/About"
import { FavVideo } from "@/FavVideo"
import { Members } from "@/Members"

export default function App() {
    return (
        <div className="bg-blue-900 text-slate-100">
            <NavigationBar />
            <Intro />
            <About />
            <FavVideo />
            <Members />
        </div>
    );
}
