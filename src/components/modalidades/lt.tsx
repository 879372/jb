import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Printer, PrinterIcon, SendHorizonalIcon, Share, Share2Icon, ShareIcon } from "lucide-react";

const concurso = [
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },
    { consurso: "6500", data: "02/07/2024", n1: "22", n2: "34", n3: "03", n4: "56", n5: "10" },

];

export default function Lt() {
    return (
        <ScrollArea className="">
            <div className="flex gap-2">
                {concurso.map((conc, index) => (
                    <div key={index} className="w-72 h-44 bg-[#202224] text-white rounded">
                        <div className="p-3">
                            <h1 className="font-semibold text-sm">Concurso {conc.consurso}</h1>
                            <span className="text-xs">{conc.data}</span>
                        </div>
                        <div className="flex justify-evenly border border-l-0 border-r-0 p-2 border-black" >
                            <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>{conc.n1}</span></div>
                            <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>{conc.n2}</span></div>
                            <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>{conc.n3}</span></div>
                            <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>{conc.n4}</span></div>
                            <div className="w-8 h-8 border rounded-full text-center flex justify-center items-center"><span>{conc.n5}</span></div>
                        </div>
                        <div className="flex gap-2 p-2">
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
