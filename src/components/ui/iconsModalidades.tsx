import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const modalidades = [
    { name: "Tradicional", img: "/tradicional.png", link:"/" },
    { name: "Ligeirinha", img: "/ligeirinha.png", link:"/" },
    { name: "Instântaneo", img: "/instantaneo.png", link:"/" },
    { name: "Bauzinho", img: "/bauzinho.png", link:"/" },
    { name: "Bolão de dezenas", img: "/balao.png", link:"/" },
    { name: "Quininha", img: "/quininha.png", link:"/" },
    { name: "Quina Brasil", img: "/quinabrasil.png", link:"/" },
    { name: "Seninha", img: "/seninha.png", link:"/" },
    { name: "Lotinha", img: "/lotinha.png", link:"/" },
];

export default function IconsModalidades() {
    return (
        <ScrollArea className="">
            <div className="flex text-white h-28 items-center justify-evenly gap-2">
                {modalidades.map((modalidade, index) => (
                    <div key={index} className="flex justify-center flex-col items-center">
                        <Link 
                            href={modalidade.link} 
                            className="w-20 h-20 flex flex-col items-center justify-center rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-4px]"
                        >
                            <Image 
                                src={modalidade.img} 
                                width={80} 
                                height={80} 
                                alt={modalidade.name} 
                                className="object-cover" 
                            />
                            <p className="text-xs mt-1 text-center flex flex-nowrap">{modalidade.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
