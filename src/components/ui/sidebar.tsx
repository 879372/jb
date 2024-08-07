
import { BotIcon, User } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
    return (
        
        <div className=" fixed z-50 h-full w-52 bg-[#131313] text-slate-300 mb-5 mt-16">
            <ScrollArea className="h-full">
            <div className="text-sm flex flex-col">
                <h1 className="font-bold ml-3 text-lg mt-5 text-white">Destaques</h1>
                <div className="mb-5">
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Slots</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Cassino ao Vivo</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Jogo do bicho</Link>
                </div>
            </div>
            <div className="text-sm flex flex-col ">
                <h1 className="font-bold ml-3  text-lg  text-white">Produtos</h1>
                <div className="mb-5">
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Rifas</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Tradiconal</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Ligeirinha</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Instantâeo</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Bauzinho</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Balão de dezenas</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Quininha</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Seninha</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Quina Brasil</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Lt</Link>
                </div>
            </div>
            <div className="text-sm flex flex-col ">
                <h1 className="font-bold ml-3  text-lg  text-white">Outros</h1>
                <div className="mb-5">
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Chat</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Grupos</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Cotações</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Ajuda</Link>
                    <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Tabela de inversões</Link>
                </div>
            </div>
        </ScrollArea>
        </div>

    )
}