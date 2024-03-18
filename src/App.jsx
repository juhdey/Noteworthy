// App.jsx
import "./App.css";
import Button from "./Button.jsx";
import Image from "./Image.jsx"; // Import your image component

export default function App() {
    return (
        <div className="app-container">
            <Image src="./group_photo.jpg" alt="Image" /> {/* Pass the appropriate path and alt text */}
            <header>
                <Button text="About Us"></Button>
                <Button text="Our Favorite Video"></Button>
                <Button text="Members"></Button>
            </header>
        </div>
    );
}
