import BolaoDeDezena from "@/components/modalidades/bolaodezena";
import Tradicional from "@/components/modalidades/tradicional";
import Quininha from "@/components/modalidades/quininha";
import Carrosel from "@/components/ui/carrosel";
import Hearder from "@/components/ui/hearder";
import IconsBichos from "@/components/ui/IconBichos";
import IconsModalidades from "@/components/ui/iconsModalidades";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" >
      <Hearder />
      <div className="flex">
        <Sidebar />
        <div className="p-3 mt-16 ml-52 bg-[#131313] flex flex-col gap-3" style={{ width: 'calc(100% - 208px)' }}>
          <IconsBichos />
          <div>
            <Carrosel />
          </div>
          <div>
            <IconsModalidades />
          </div>
          <div className="">
            <div className="flex items-center text-white gap-2 mb-5 font-semibold">
              <Image
                src="/tradicional.png"
                width={20}
                height={20}
                alt="tradicional"
                className="object-cover"
              />
              <h1>Tradicional</h1>
            </div>
            <div className="mb-10">
              <Tradicional />
            </div>
            <div className="flex items-center text-white gap-2 mb-5 font-semibold">
              <Image
                src="/balao.png"
                width={20}
                height={20}
                alt="tradicional"
                className="object-cover"
              />
              <h1>Bolão de dezenas</h1>
            </div>
            <div className="mb-10">
              <BolaoDeDezena />
            </div>
            <div className="flex items-center text-white gap-2 mb-5 font-semibold">
              <Image
                src="/quininha.png"
                width={20}
                height={20}
                alt="tradicional"
                className="object-cover"
              />
              <h1>Quininha</h1>
            </div>
            <div className="mb-10">
              <Quininha />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
