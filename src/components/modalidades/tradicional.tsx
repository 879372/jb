import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Printer, PrinterIcon, SendHorizonalIcon, Share, Share2Icon, ShareIcon } from "lucide-react";

const animals = [
    { name: "Avestruz", number: "25551-13", img: "/avestruz.png" },
    { name: "Águia", number: "25551-13", img: "/aguia.png" },

];

export default function Tradicional() {
    return (
        <ScrollArea className="">
            <div className="w-72 h-64 bg-[#202224] text-white rounded">
                <div className="p-3">
                    <h1 className="font-semibold text-sm">PT-RIO 16:20</h1>
                    <span className="text-xs">07/08/2024</span>
                </div>
                <div className="flex justify-between" >
                    <div className="p-2 ">
                        <Image src="/avestruz.png" width={100} height={100} alt="avestruz" />
                        <div className="bg-green-500 rounded font-semibold text-center text-xs">
                            <p>Avestruz</p>
                        </div>
                    </div>

                    <div className="text-white text-xs p-1 font-semibold">
                        <p>1º</p>
                        <p>2º</p>
                        <p>3º</p>
                        <p>4º</p>
                        <p>5º</p>
                        <p>6º</p>
                        <p>7º</p>
                        <p>S</p>
                    </div>
                    <div className="text-white text-xs p-1 font-semibold">
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                        <p>25551-13</p>
                    </div>

                </div>
                <div className="flex gap-2 p-1">
                    <Button><PrinterIcon /></Button>
                    <Button><Share2Icon /></Button>
                </div>

            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
