import Hearder from "@/components/ui/hearder";
import Sidebar from "@/components/ui/sidebar";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function Account() {
    return (
        <main className="h-screen bg-[#131313]" >
            <Hearder />
            <div className="flex">
                <Sidebar />
                <div className="p-3 mt-16 ml-52 bg-[#131313] rounded flex flex-col gap-3 text-white" style={{ width: 'calc(100% - 208px)' }}>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Informações da conta</h2>
                    
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-light text-sm">
                            <div>
                                <Label>CPF</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'999.999.999-99'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Nascimento</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    type="date"
                                    value={'José Kaio'}

                                />
                            </div>
                            <div>
                                <Label>Nome</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'José Kaio'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>E-mail</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'kaios5028gmail.com'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Telefone</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'(84) 9 9999-9999'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>CEP</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'59575-000'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Estado</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'Rio Grande do Norte'}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Cidade</Label>
                                <Input
                                    className="bg-[#202224] border-slate-700"
                                    value={'Natal'}
                                    type="text"
                                />
                            </div>

                        </div>
                        <div className="flex flex-1 mt-5">
                            <Button className="w-full bg-[#2ccf30]">Salvar</Button>
                        </div>
                    </div>

                </div>
            </div >
        </main >
    );
}
