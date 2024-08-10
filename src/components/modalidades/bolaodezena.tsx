import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

const rodada = [
    { number: "57", status: "encerrado", dataInicio: "17/07", dataFim: "20/07", acumulado: "28.933,00", seipontos: "600,00", maxima: "8", rateio: "1.085,00 (3)" },
    { number: "58", status: "ativa", dataInicio: "18/07", dataFim: "22/07", acumulado: "20.933,00", seipontos: "500,00", maxima: "5", rateio: "2.085,00 (3)" },
    { number: "57", status: "encerrado", dataInicio: "17/07", dataFim: "20/07", acumulado: "28.933,00", seipontos: "600,00", maxima: "8", rateio: "1.085,00 (3)" },
    { number: "58", status: "ativa", dataInicio: "18/07", dataFim: "22/07", acumulado: "20.933,00", seipontos: "500,00", maxima: "5", rateio: "2.085,00 (3)" },
    { number: "57", status: "encerrado", dataInicio: "17/07", dataFim: "20/07", acumulado: "28.933,00", seipontos: "600,00", maxima: "8", rateio: "1.085,00 (3)" },
    { number: "58", status: "ativa", dataInicio: "18/07", dataFim: "22/07", acumulado: "20.933,00", seipontos: "500,00", maxima: "5", rateio: "2.085,00 (3)" },
];

export default function BolaoDeDezena() {
    return (
        <ScrollArea className="">
            <div className="flex gap-2">
                {rodada.map((rod, index) => (
                    <div key={index} className="w-72 h-44 bg-[#202224] text-white rounded">
                        <div className="p-3 flex justify-between items-center">
                            <div>
                                <h1 className="font-semibold text-sm">Rodada {rod.number} ({rod.status})</h1>
                                <span className="text-xs">{rod.dataInicio} até {rod.dataFim}</span>

                            </div>
                            <div className="flex gap-2 p-1">
                                <Button><Eye/></Button>
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
                                <p>R$ {rod.acumulado}</p>
                                <p>R$ {rod.seipontos}</p>
                                <p>{rod.maxima} pontos</p>
                                <p>{rod.rateio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
