import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Printer, PrinterIcon, SendHorizonalIcon, Share, Share2Icon, ShareIcon } from "lucide-react";

const animals = [
    { name: "Avestruz", number: "25551-13", img: "/avestruz.png" },
    { name: "Águia", number: "25551-13", img: "/aguia.png" },

];

export default function Quininha() {
    return (
        <ScrollArea className="">
            <div className="w-72 h-44 bg-[#202224] text-white rounded">
                <div className="p-3">
                    <h1 className="font-semibold text-sm">Concurso 6500</h1>
                    <span className="text-xs">07/08/2024</span>
                </div>
                <div className="flex justify-evenly border border-l-0 border-r-0 p-2 border-black" >
                    <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>24</span></div>
                    <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>24</span></div>
                    <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>24</span></div>
                    <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>24</span></div>
                    <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>24</span></div>

                </div>
                <div className="flex gap-2 p-2">
                    <Button><PrinterIcon /></Button>
                    <Button><Share2Icon /></Button>
                </div>

            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
