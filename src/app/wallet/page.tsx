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
import Image from "next/image";
import Hearder from "@/components/ui/hearder";

type Transaction = {
    dataehora: string;
    tipo: string;
    valor: string;
    saldoanterior: string;
    saldoposterior: string;
};

const transacao: Transaction[] = [
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "0,00", saldoposterior: "10,00" },
    { dataehora: "09/08/2024 08:26", tipo: "Saque", valor: "5,00", saldoanterior: "10,00", saldoposterior: "5,00" },
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "5,00", saldoposterior: "15,00" },
    { dataehora: "09/08/2024 08:26", tipo: "Depósito", valor: "10,00", saldoanterior: "15,00", saldoposterior: "25,00" },
    { dataehora: "09/08/2024 08:26", tipo: "Cancelamento", valor: "10,00", saldoanterior: "25,00", saldoposterior: "25,00" }
];

export default function Wallet() {
    const [filtroOpen, setFiltroOpen] = useState<boolean>(false);
    const [modalTransacao, setModalTransacao] = useState<boolean>(false);
    const [selectedTipo, setSelectedTipo] = useState<string | 'all'>('all');
    const [selectedTransacao, setSelectedTransacao] = useState<Transaction | null>(null);
    const [dateInicio, setDateInicio] = useState<string>('');
    const [dateFim, setDateFim] = useState<string>('');

    const handleTipoChange = (value: string) => {
        setSelectedTipo(value);
    };

    const handleTransacaoClick = (transacao: Transaction) => {
        setSelectedTransacao(transacao);
        setModalTransacao(true);
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

        return (selectedTipo === 'all' || transa.tipo === selectedTipo) &&
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
                            <h2 className="text-lg font-semibold mb-2">Carteira</h2>
                            <Button onClick={() => setFiltroOpen(!filtroOpen)} className="bg-[#202224]"><Filter /></Button>
                        </div>
                        {filtroOpen && (
                            <div className="bg-[#202224] rounded mt-5 flex flex-col gap-2 p-2 justify-center">
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
                                </div>
                            </div>
                        )}
                        {filteredTransacoes.map((transa, index) => (
                            <div key={index} onClick={() => handleTransacaoClick(transa)} className="border-b-gray-700 border-b h-12 flex text-xs justify-between gap-2 items-center cursor-pointer hover:bg-[#202224] rounded mt-5">
                                <div className="flex items-center gap-2">
                                    <User />
                                    <div>
                                        <h1>{transa.tipo}</h1>
                                        <p>{transa.dataehora}</p>
                                    </div>
                                </div>
                                <span className={transa.tipo === 'Depósito' ? "text-green-500" : transa.tipo === 'Saque' ? "text-red-500" : "text-white"}>{transa.valor}</span>
                            </div>
                        ))}
                        {modalTransacao && selectedTransacao && (
                            <div className="fixed z-50 inset-0 overflow-y-hidden">
                                <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                        <div onClick={() => setModalTransacao(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                                    </div>
                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                    <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                                        <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="flex justify-center items-center gap-2 font-bold text-lg">
                                                Detalhes da transação
                                            </div>
                                            <div className="mt-3 sm:mt-0 sm:ml-4 text-left text-white">
                                                <div className="mt-5">
                                                    <div className="flex justify-between p-2">
                                                        <p>Saldo Anterior</p>
                                                        <p>{selectedTransacao.saldoanterior}</p>
                                                    </div>
                                                    <div className="flex gap-2 justify-between border-b border-t p-2">
                                                        <div>
                                                            <p>Data:</p>
                                                            <p>Tipo:</p>
                                                            <p>Valor:</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p>{selectedTransacao.dataehora}</p>
                                                            <p>{selectedTransacao.tipo}</p>
                                                            <p className={selectedTransacao.tipo === 'Depósito' ? "text-green-500" : selectedTransacao.tipo === 'Saque' ? "text-red-500" : "text-white"}>
                                                                {selectedTransacao.valor}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between p-2">
                                                        <p>Saldo Posterior</p>
                                                        <p>{selectedTransacao.saldoposterior}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#202224] flex justify-center p-5">
                                            <Label className="text-white">
                                                <span onClick={() => setModalTransacao(false)} className="text-green-500 cursor-pointer">Fechar</span>
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
