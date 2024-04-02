import { Logo } from "@/Logo"

export function Intro() {
    return <div className="flex">
        <img className="inset-y-0 left-0 flex-initial max-w-prose" src="src/assets/group_photo.jpg" alt="Our group photo" />
        <div className="flex">
            <div className="flex flex-col font-bold place-content-center p-10 text-7xl">
                <p>Noteworthy</p>
                <p>A Cappella</p>
            </div>
            <Logo className="w-52 h-52 place-self-center" />
        </div>
    </div>
}
