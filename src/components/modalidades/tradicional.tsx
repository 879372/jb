import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Printer, PrinterIcon, SendHorizonalIcon, Share, Share2Icon, ShareIcon } from "lucide-react";

const tradicional = [
    { name: "Avestruz", number: "25551-13", img: "/avestruz.png", slot:"PT-RIO", hora:"21:20", data:"07/08/2024" },
    { name: "Coelho", number: "25551-13", img: "/coelho.png", slot:"FED", hora:"19:00", data:"07/08/2024" },
    { name: "Touro", number: "25551-13", img: "/touro.png", slot:"CORUJÃO", hora:"23:20", data:"07/08/2024" },
    { name: "Galo", number: "25551-13", img: "/galo.png", slot:"PT-RIO", hora:"21:20", data:"07/08/2024" },
    { name: "Urso", number: "25551-13", img: "/urso.png", slot:"PT-RIO", hora:"21:20", data:"07/08/2024" },
    { name: "Gato", number: "25551-13", img: "/gato.png", slot:"SURPRESINHA", hora:"21:20", data:"07/08/2024" },

];

export default function Tradicional() {
    return (
        <ScrollArea className="">
            <div className="flex gap-2">

                {tradicional.map((trad, index) => (
                    <div key={index} className="w-72 h-64 bg-[#202224] text-white rounded ">
                        <div className="p-3">
                            <h1 className="font-semibold text-sm">{trad.slot} {trad.hora}</h1>
                            <span className="text-xs">{trad.data}</span>
                        </div>

                        <div className="flex justify-between" >
                            <div className="p-2 ">
                                <Image src={trad.img} width={100} height={100} alt={trad.name}/>
                                <div className="bg-green-500 rounded font-semibold text-center text-xs">
                                    <p>{trad.name}</p>
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
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
                                <p>{trad.number}</p>
 
                            </div>
                        </div>
                        <div className="flex gap-2 p-1">
                            <Button><PrinterIcon /></Button>
                            <Button><Share2Icon /></Button>
                        </div>
                    </div>
                ))}
            </div>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
