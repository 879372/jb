import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const animals = [
    { name: "Avestruz", number: "01", img: "/avestruz.png" },
    { name: "Águia", number: "02", img: "/aguia.png" },
    { name: "Burro", number: "03", img: "/burro.png" },
    { name: "Borboleta", number: "04", img: "/borboleta.png" },
    { name: "Cachorro", number: "05", img: "/cachorro.png" },
    { name: "Cabra", number: "06", img: "/cabra.png" },
    { name: "Carneiro", number: "07", img: "/carneiro.png" },
    { name: "Camelo", number: "08", img: "/camelo.png" },
    { name: "Cobra", number: "09", img: "/cobra.png" },
    { name: "Coelho", number: "10", img: "/coelho.png" },
    { name: "Cavalo", number: "11", img: "/cavalo.png" },
    { name: "Elefante", number: "12", img: "/elefante.png" },
    { name: "Galo", number: "13", img: "/galo.png" },
    { name: "Gato", number: "14", img: "/gato.png" },
    { name: "Jacaré", number: "15", img: "/jacare.png" },
    { name: "Leão", number: "16", img: "/leao.png" },
    { name: "Macaco", number: "17", img: "/macaco.png" },
    { name: "Porco", number: "18", img: "/porco.png" },
    { name: "Pavão", number: "19", img: "/pavao.png" },
    { name: "Peru", number: "20", img: "/peru.png" },
    { name: "Touro", number: "21", img: "/Touro.png" },
    { name: "Tigre", number: "22", img: "/tigre.png" },
    { name: "Urso", number: "23", img: "/urso.png" },
    { name: "Veado", number: "24", img: "/veado.png" },
    { name: "Vaca", number: "25", img: "/vaca.png" },
];

export default function IconsBichos() {
    return (
        <ScrollArea className="">
            <div className="flex text-white h-28 items-center justify-between gap-2" >
                {animals.map((animal) => (
                    <div key={animal.number} className="flex justify-center flex-col items-center">
                        <div className="bg-[#202224] w-14 h-14 rounded-lg p-2">
                            <Image src={animal.img} width={100} height={100} alt={animal.name} />
                        </div>
                        <div className="w-5 h-5 mt-1 bg-[#202224] rounded-full flex justify-center items-center">
                            <span className="text-xs">{animal.number}</span>
                        </div>
                        <p className="text-xs">{animal.name}</p>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
