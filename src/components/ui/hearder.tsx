import Image from "next/image";
import { Button } from "@/components/ui/button"
import { BookOpen, DoorOpen, FolderOpen, SidebarOpen, User, User2, UserCheck, UserRoundCheck } from "lucide-react";

export default function Hearder() {
    return(
        <div className="bg-[#131313] h-16 flex justify-between fixed z-50 w-full border border-black">
            <div className="flex ml-5 items-center h-full ">
                <Image src="/logo-2.png" width={100} height={100} alt="logo" className="p-2" />            
            </div>
            <div className="flex gap-2 items-center mr-2">
                <Button className="bg-[#2ccf30] h-9"> <User className="text-white" size={20}/>Cadastrar</Button>
                <Button className="bg-zinc-500 h-9" > <SidebarOpen className="text-white" size={20}/>Entrar</Button>
            </div>
        </div>
        
    )
}