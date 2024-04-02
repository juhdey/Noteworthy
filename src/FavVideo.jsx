import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { YouTubeEmbed } from 'react-social-media-embed';

export function FavVideo() {
    return <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold py-8">Our Favorite Videos</h1>
        <Carousel className="place-self-center py-4 w-1/2">
            <CarouselContent>
                <CarouselItem><div style={{ display: 'flex', justifyContent: 'center' }}><YouTubeEmbed url="https://www.youtube.com/watch?v=n0p8MxT8AxI" /></div></CarouselItem>
                <CarouselItem><div style={{ display: 'flex', justifyContent: 'center' }}><YouTubeEmbed url="https://www.youtube.com/watch?v=kW57PpibCMA" /></div></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <p className="text-2xl py-3">Find us on <a className="text-red-600 font-medium border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
            href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA">
            Youtube</a></p>
    </div>
}
