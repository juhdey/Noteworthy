// import "./App.css";
import { NavigationBar } from "@/NavigationBar"

export default function App() {
    return (
        <>
            <NavigationBar />
            <img className="image" src="src/assets/group_photo.jpg" alt="Our group photo" />
            <header>
                <a>About Us</a>
                <a>Our Favorite Video</a>
                <a>Members</a>
            </header>
        </>
    );
}
