import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { InstagramEmbed } from 'react-social-media-embed';

export function About() {
    return <>
        <div className="text-center flex flex-col">
            <h1 className="text-6xl font-bold py-8"><a style={{ display: 'block', position: 'relative', top: '-75px', visibility: 'hidden' }} name="about"></a>About Us</h1>
            <div className="w-3/5 place-self-center py-3">
                <p>We&lsquo;re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</p>
                <p>Since our founding in 2000, we&lsquo;ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold py-8">Events</h1>
                <Carousel className="w-1/2 place-self-center py-4">
                    <CarouselContent>
                        <CarouselItem><img src="src/assets/flyers/Copy of NW Show Flyer F23.png" /></CarouselItem>
                        <CarouselItem><img src="src/assets/flyers/Copy of Road Heist Bank Trip.png" /></CarouselItem>
                        <CarouselItem><img src="src/assets/flyers/Copy of Welcome Back Sp2024 (1).png" /></CarouselItem>
                        <CarouselItem><img src="src/assets/flyers/Copy of Welcome Back Spring 2023.png" /></CarouselItem>
                        <CarouselItem><img src="src/assets/flyers/Halloween-Flyer.png" /></CarouselItem>
                        <CarouselItem><img src="src/assets/flyers/West-Coast-Showcase-F23-Flyer.jpg" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold pt-8">Hire Us</h1>
                <div className="w-3/5 place-self-center py-3">
                    <p>We&lsquo;re no stranger to weddings, private parties, tailgates, and conferences.</p>
                    <p>We&lsquo;ve performed at venues including <strong>San Francisco City Hall</strong>, <strong>University House</strong>, the <strong>Faculty Club</strong>, and UC Berkeley&lsquo;s <strong>2022 Commencement</strong>.</p>
                </div>
                <img className="w-3/5 place-self-center" src="src/assets/Noteworthy-at-ST-City-Hall.jpg" />
            </div>
            <div className="text-center flex flex-col">
                <h1 className="text-5xl font-bold pt-8">Follow Us</h1>
                <div className="py-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/cal_noteworthy/" width={328} />
                </div>
            </div>
        </div>
    </>
}
