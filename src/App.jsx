import { NavigationBar } from "@/NavigationBar"
import { Intro } from "@/Intro"
import { About } from "@/About"
import { FavVideo } from "@/FavVideo"
import { Members } from "@/Members"

export default function App() {
    return (
        <>
            <NavigationBar />
            <Intro />
            <About />
            <FavVideo />
            <Members />
        </>
    );
}
