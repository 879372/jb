import {
    BotIcon,
    HandCoins,
    User,
    Dice5,
    DollarSign,
    BarChart,
    ShieldCheck,
    Settings,
    HelpCircle,
    MessageCircle,
    LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="fixed z-10 h-full w-52 bg-[#131313] text-slate-300 mb-5 mt-16">
            <ScrollArea className="h-full">
                <div className="text-sm flex flex-col">
                    <h1 className="font-bold ml-3 text-lg mt-5 text-white">Destaques</h1>
                    <div className="mb-5">
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/fichas.gif'
                                width={22}
                                height={22}
                                alt=''
                                className="object-cover"
                            />
                            Slots
                        </Link>                    
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/casino.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Cassino ao Vivo
                        </Link>                    
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/tradicional.gif'
                                width={22}
                                height={22}
                                alt=''
                                className="object-cover"
                            />
                            Jogo do bicho
                        </Link>                    
                    </div>
                </div>
                <div className="text-sm flex flex-col">
                    <h1 className="font-bold ml-3 text-lg text-white">Produtos</h1>
                    <div className="mb-5">
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/rifa.png'
                                width={18}
                                height={18}
                                alt=''
                                className="object-cover"
                            />
                            Rifas
                        </Link>
                        <Link href="/bet/tradicional" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/tradicional.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Tradicional
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/ligeirinha.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Ligeirinha
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/instantaneo.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Instantâneo
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/bauzinho.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Bauzinho
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/balao.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Bolão de dezenas
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/quininha.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Quininha
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/seninha.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Seninha
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/quinabrasil.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Quina Brasil
                        </Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white">
                            <Image
                                src='/lotinha.png'
                                width={20}
                                height={20}
                                alt=''
                                className="object-cover"
                            />
                            Lt
                        </Link>
                    </div>
                </div>
                <div className="text-sm flex flex-col">
                    <h1 className="font-bold ml-3 text-lg text-white">Perfil</h1>
                    <div className="mb-5">
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><HandCoins />Carteira</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><BarChart />Solicitações</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Palpites</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Resultados</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><Settings />Alterar senha</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><ShieldCheck />Comissões</Link>
                    </div>
                </div>
                <div className="text-sm flex flex-col">
                    <h1 className="font-bold ml-3 text-lg text-white">Outros</h1>
                    <div className="mb-5">
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><MessageCircle />Chat</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Grupos</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><BarChart />Cotações</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><HelpCircle />Ajuda</Link>
                        <Link href="/" className="p-2 flex items-center gap-2 hover:text-white"><User />Tabela de inversões</Link>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
