'use client'
import Sidebar from "@/components/ui/sidebar";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, User } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Hearder from "@/components/ui/hearder";


const transacao = [
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "0,00", saldoposterior: "10,00", status: "Aprovado" },
    { dataehora: "09/08/2024 08:26", tipo: "Saque", valor: "5,00", saldoanterior: "10,00", saldoposterior: "5,00", status: "Aprovado" },
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "5,00", saldoposterior: "15,00", status: "Aprovado" },
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "15,00", saldoposterior: "25,00", status: "Pendente" },
    { dataehora: "09/08/2024 08:26", tipo: "Cancelamento", valor: "10,00", saldoanterior: "25,00", saldoposterior: "25,00", status: "Cancelado" }
];

export default function Wallet() {
    const [filtroOpen, setFiltroOpen] = useState<boolean>(false);
    const [selectedTipo, setSelectedTipo] = useState<string | 'all'>('all');
    const [selectedStatus, setSelectedStatus] = useState<string | 'all'>('all');
    const [dateInicio, setDateInicio] = useState<string>('');
    const [dateFim, setDateFim] = useState<string>('');

    const handleTipoChange = (value: string) => {
        setSelectedTipo(value);
    };
    const handleStatusChange = (value: string) => {
        setSelectedStatus(value);
        console.log(value)
    };

    const handleDateInicioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateInicio(e.target.value);
    };

    const handleDateFimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateFim(e.target.value);
    };

    const filterByDate = (date: string) => {
        return new Date(date.split('/').reverse().join('/'));
    };

    const filteredTransacoes = transacao.filter(transa => {
        const transDate = filterByDate(transa.dataehora.split(' ')[0]);
        const startDate = dateInicio ? filterByDate(dateInicio) : new Date(0); // Data mínima
        const endDate = dateFim ? filterByDate(dateFim) : new Date(); // Data máxima

        return (selectedTipo === 'all' || transa.tipo === selectedTipo ) &&
            (selectedStatus === 'all' || transa.status === selectedStatus) &&
            transDate >= startDate &&
            transDate <= endDate;
    });

    return (
        <main className="h-screen bg-[#131313]">
            <Hearder />
            <div className="flex">
                <Sidebar />
                <div className="p-3 mt-16 ml-52 bg-[#131313] rounded flex flex-col gap-3 text-white" style={{ width: 'calc(100% - 208px)' }}>
                    <div className="mb-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold mb-2">Solicitaçõe</h2>
                            <Button onClick={() => setFiltroOpen(!filtroOpen)} className="bg-[#202224]"><Filter /></Button>
                        </div>
                        {filtroOpen && (
                            <div className=" bg-[#202224] rounded mt-5 flex flex-col gap-2 p-3 justify-center">
                                <div className="flex gap-3 items-center">
                                    <Input
                                        type="date"
                                        value={dateInicio}
                                        onChange={handleDateInicioChange}
                                        className="bg-[#202224] border-slate-700 flex"
                                    />
                                    Até
                                    <Input
                                        type="date"
                                        value={dateFim}
                                        onChange={handleDateFimChange}
                                        className="bg-[#202224] border-slate-700 flex"
                                    />
                                <Select onValueChange={handleTipoChange}>
                                    <SelectTrigger className="bg-[#202224] border-slate-700">
                                        <SelectValue placeholder="Tipo de transação" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#202224] text-white border-slate-700 ">
                                        <SelectItem value="all">Todos</SelectItem>
                                        <SelectItem value="Depósito">Depósito</SelectItem>
                                        <SelectItem value="Saque">Saque</SelectItem>
                                        <SelectItem value="Cancelamento">Cancelamento</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select onValueChange={handleStatusChange}>
                                    <SelectTrigger className="bg-[#202224] border-slate-700">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#202224] text-white border-slate-700 ">
                                        <SelectItem value="all">Todos</SelectItem>
                                        <SelectItem value="Aprovado">Aprovado</SelectItem>
                                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                                        <SelectItem value="Pendente">Pendente</SelectItem>
                                    </SelectContent>
                                </Select>
                                </div>
                            </div>
                        )}
                        {filteredTransacoes.map((transa, index) => (
                            <div
                                key={index}
                                className="flex text-xs gap-2 items-center cursor-pointer hover:bg-[#202224] rounded mt-5"
                            >
                                <div className="flex items-center gap-2 h-20 flex-1">
                                    <div className="flex gap-1 h-full items-center flex-1">
                                        <div
                                            className={
                                                transa.status === 'Aprovado' ? "bg-green-500 w-1 h-full" :
                                                    transa.status === 'Cancelado' ? "bg-red-500 w-1 h-full" :
                                                        transa.status === 'Pendente' ? "bg-yellow-300 w-1 h-full" :
                                                            "bg-gray-500 w-1 h-full" // Cor padrão se status não corresponder
                                            }
                                        >
                                        </div>
                                        <div className="flex flex-1 flex-col w-full ">
                                            <h1 className="font-bold text-sm border-b-gray-800 border-b p-1">{transa.status}</h1>
                                            <div className="flex flex-1 p-1">
                                                <div>
                                                    <p>Data:</p>
                                                    <p>Tipo:</p>
                                                    <p>Valor:</p>
                                                </div>
                                                <div>
                                                    <p>{transa.dataehora}</p>
                                                    <p>{transa.tipo}</p>
                                                    <p>{transa.valor}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
