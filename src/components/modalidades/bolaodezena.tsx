import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Eye, Printer, PrinterIcon, SendHorizonalIcon, Share, Share2Icon, ShareIcon } from "lucide-react";

const animals = [
    { name: "Avestruz", number: "25551-13", img: "/avestruz.png" },
    { name: "Águia", number: "25551-13", img: "/aguia.png" },

];

export default function BolaoDeDezena() {
    return (
        <ScrollArea className="">
            <div className="w-72 h-44 bg-[#202224] text-white rounded">
                <div className="p-3 flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold text-sm">Rodada 58 (encerrada)</h1>
                        <span className="text-xs">07/08 até 20/07</span>

                    </div>
                    <div className="flex gap-2 p-1">
                        <Button><Eye /></Button>
                    </div>
                </div>
                <div className="flex justify-between p-2" >


                    <div className="text-white text-sm p-1 font-semibold">
                        <p>Prêmio acumulado:
                        </p>
                        <p>Prêmio 6 pontos
                        </p>
                        <p>Pontuação máxima:
                        </p>
                        <p>Prêmio rateio:
                        </p>
                    </div>
                    <div className="text-white text-sm p-1 font-semibold text-right">
                        <p>R$ 28.933,00
                        </p>
                        <p>R$ 600,00
                        </p>
                        <p>8 pontos
                        </p>
                        <p>1.085,00 (3)
                        </p>
                    </div>

                </div>

            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
