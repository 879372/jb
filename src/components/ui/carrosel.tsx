
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Carrosel() {
    return (
        <div className="w-full relative group">
            <Carousel className="">
                <CarouselContent className="w-full flex  justify-center items-center">
                    <CarouselItem className="w-full h-80 relative flex-shrink-0">
                        <Image src="/folder.png" alt="folder" fill className="object-cover w-full h-full" />
                    </CarouselItem>
                    <CarouselItem className="w-full h-80 relative flex-shrink-0">
                        <Image src="/folder.png" alt="folder" fill className="object-cover w-full h-full" />
                    </CarouselItem>
                    <CarouselItem className="w-full h-80 relative flex-shrink-0">
                        <Image src="/folder.png" alt="folder" fill className="object-cover w-full h-full" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-10" />
                <CarouselNext className="right-10" />
            </Carousel>
        </div>
    );
}