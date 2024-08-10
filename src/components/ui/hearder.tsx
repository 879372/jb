'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ArrowBigRight, ArrowDown, ArrowDown10, ArrowLeft, ArrowRight, BookOpen, BookPlus, Check, Copy, CreditCard, DoorOpen, FileWarning, FileWarningIcon, FolderOpen, Locate, LogOut, MailWarning, MenuIcon, MessageCircleWarning, MessageSquareWarning, MoreHorizontal, Plus, PlusCircle, PlusSquare, QrCode, RefreshCcw, Share2, Share2Icon, SidebarOpen, User, User2, UserCheck, UserRoundCheck, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import QRCode from 'qrcode.react';
import { Progress } from "@/components/ui/progress"


const login = { username: 'admin', password: 'admin', token: '123' }

export default function Hearder() {
    const [modalLogin, setModalLogin] = useState<boolean>(false)
    const [modalShare, setModalShare] = useState<boolean>(false)
    const [modalCadastro, setModalCadastro] = useState<boolean>(false)
    const [modalWallet, setModalWallet] = useState<boolean>(false)
    const [modalSaque, setModalSaque] = useState<boolean>(false)
    const [modalDeposito, setModalDeposito] = useState<boolean>(false)
    const [paymentLink, setPaymentLink] = useState<string>('');
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
    const [copied, setCopied] = useState(false);

    const closeLoginOpenCadastre = () => {
        setModalLogin(false);
        setModalCadastro(true);
    }
    const closeCadastreOpenLogin = () => {
        setModalLogin(true);
        setModalCadastro(false);
    }
    const handleClosedDep = () => {
        setModalSaque(true);
        setModalWallet(false);
    }
    const handleClosedSaq = () => {
        setModalSaque(false);
        setModalWallet(true);
    }
    const handleClosedDepOpenQr = () => {
        setModalDeposito(true);
        setModalWallet(false);
    }
    const handleClosedQrOpenDep = () => {
        setModalDeposito(false);
        setModalWallet(true);
    }
    const handleClosedQrOpenSaq = () => {
        setModalDeposito(false);
        setModalSaque(true);
    }

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (modalDeposito && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setModalDeposito(false);
        }

        return () => clearInterval(timer);
    }, [modalDeposito, timeLeft]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(paymentLink);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="bg-[#131313] h-16 flex justify-between fixed z-50 w-full border border-black">
            <div className="flex ml-5 items-center h-full ">
                <Link href={"/"}><Image src="/logo-2.png" width={100} height={100} alt="logo" className="p-2" /></Link>
            </div>
            {login.token === '' ? (
                <div className="flex gap-2 items-center mr-2">
                    <Button className="bg-[#2ccf30] h-9" onClick={() => closeLoginOpenCadastre()}> <User className="text-white" size={20} />Cadastrar</Button>
                    <Button className="bg-zinc-500 h-9" onClick={() => setModalLogin(true)} > <SidebarOpen className="text-white" size={20} />Entrar</Button>

                </div>
            ) : (
                <div className="flex gap-2 items-center mr-2">
                    <Button className="bg-[#202224] h-9"  > <RefreshCcw className="text-white" size={20} /></Button>
                    <Button onClick={() => setModalWallet(true)} className="bg-[#202224] h-9 gap-1" >R$ 0,00 <Plus className="text-white font-bold" size={20} /></Button>
                    <div className="flex">
                        <Button className="bg-[#2ccf30] h-9 rounded-r-none w-10 p-0"  > <User className="text-white" size={20} /></Button>
                        <Menubar>
                            <MenubarMenu >
                                <MenubarTrigger className="h-full rounded-l-none" ><ArrowDown className="text-white" size={20} /></MenubarTrigger>
                                <MenubarContent className="bg-[#202224] text-white ">
                                    <Link href={"/account"}><MenubarItem className="flex gap-2"><User size={18} />Minha conta</MenubarItem></Link>
                                    <Link href={"/wallet"}><MenubarItem className="flex gap-2"><Wallet size={18} />Carteira</MenubarItem></Link>
                                    <Link href={"/solicitations"}><MenubarItem className="flex gap-2"><CreditCard size={18} />Solicitações</MenubarItem></Link>
                                    <MenubarItem onClick={() => setModalShare(true)} className="flex gap-2"><Share2Icon size={18} />Recomendar amigos</MenubarItem>
                                    <MenubarItem className="flex gap-2"><LogOut size={18} />Sair</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            )}
            {modalLogin && (
                <div className="fixed z-50 inset-0 overflow-y-hidden">
                    <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalLogin(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="flex justify-center items-center gap-2">
                                        <Image src="/logo-2.png" width={200} height={200} alt="logo" className="p-2" />
                                    </div>
                                    <div className="mt-3  sm:mt-0 sm:ml-4 text-left text-white">
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <Label>E-mail</Label>
                                                    <Input
                                                        type="text"
                                                        value=''
                                                        placeholder="Digite seu e-mail"
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Senha</Label>
                                                    <Input
                                                        type="password"
                                                        value=''
                                                        placeholder="Digite sua senha"
                                                    />
                                                </div>
                                                <div className='flex flex-1 mt-2'>
                                                    <Button className="w-full bg-green-500">
                                                        Salvar
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#202224] flex justify-center p-5">
                                <Label className="text-white">
                                    Ainda não possui uma conta? <span onClick={() => closeLoginOpenCadastre()} className="text-green-500 cursor-pointer">Cadastre-se</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalCadastro && (
                <div className="fixed z-50 inset-0 overflow-y-hidden">
                    <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalCadastro(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="flex justify-center items-center gap-2">
                                        <Image src="/logo-2.png" width={200} height={200} alt="logo" className="p-2" />

                                    </div>
                                    <div className="mt-3  sm:mt-0 sm:ml-4 text-left text-white">
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <Label>CPF <span className="text-red-600">*</span></Label>
                                                    <Input
                                                        type="number"
                                                        value=''
                                                        placeholder="Digite seu CPF"
                                                    />
                                                </div>
                                                <div>
                                                    <Label>E-mail <span className="text-red-600">*</span></Label>
                                                    <Input
                                                        type="text"
                                                        value=''
                                                        placeholder="Digite seu e-mail"
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Senha <span className="text-red-600">*</span></Label>
                                                    <Input
                                                        type="password"
                                                        value=''
                                                        placeholder="Crie sua nova senha"
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Telefone <span className="text-red-600">*</span></Label>
                                                    <Input
                                                        type="number"
                                                        value=''
                                                        placeholder="Digite seu telefone"
                                                    />
                                                </div>
                                                <div className='flex flex-1 mt-2'>
                                                    <Button className="w-full bg-green-500">
                                                        Salvar
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#202224] flex justify-center p-5">
                                <Label className="text-white">
                                    Já possui possui uma conta? <span onClick={() => closeCadastreOpenLogin()} className="text-green-500 cursor-pointer">Fazer login</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalShare && (
                <div className="fixed z-50 inset-0 overflow-y-hidden">
                    <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalShare(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col gap-2">
                                <div className="flex justify-center items-center gap-2 font-bold text-lg text-white">
                                    Código de recomendação
                                </div>
                                <div className=" flex flex-col gap-3 mt-3 sm:mt-0 sm:ml-4 text-left text-white">
                                    <Input
                                        className="bg-[#202224] border-slate-700 w-full"
                                        value={"https://palpite.shoppingdasorte.com/"}
                                    />
                                    <div className="bg-[#202224] flex justify-center gap-2 w-full">
                                        <Button className="w-full bg-green-500 h-8"><Copy /></Button>
                                        <Button className="w-full bg-green-500 h-8"><Share2 /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalWallet && (
                <div className="fixed z-50 inset-0 overflow-y-hidden">
                    <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalWallet(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="flex flex-col  gap-2 text-white">
                                        <h1 className="font-bold text-lg">Carteira</h1>
                                        <p className="text-sm">Saldo: R$ 0,00</p>
                                    </div>
                                    <div className="mt-3  sm:mt-0 sm:ml-4 text-left text-white">
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <div>
                                                        <h2 onClick={() => handleClosedSaq()} className="p-2 cursor-pointer">Depositar</h2>
                                                        <div className=" h-1 bg-green-500"></div>
                                                    </div>
                                                    <h1 onClick={() => handleClosedDep()} className="p-2 cursor-pointer">Sacar</h1>
                                                </div>
                                                <div className="text-xs flex flex-col gap-1">
                                                    <p className="bg-[#131313] rounded p-1"> Mínimo de depósito: 1,00</p>
                                                    <p className="bg-[#131313] rounded p-1">Máximo de depósito: 100.000,00</p>
                                                </div>
                                                <div className="flex flex-col justify-center items-center p-5">
                                                    <p className="text-lg mb-4">Qual valor deseja depositar?</p>
                                                    <div className="flex flex-col items-center p-5 w-full max-w-md">
                                                        <input
                                                            className="border-none bg-transparent text-3xl text-center focus:border-none focus:outline-none w-full sm:w-3/4 md:w-1/2"
                                                            value={'R$ 10,00'}
                                                        />
                                                        <div className="h-[1px] bg-green-500 w-full mt-2"></div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-1 '>
                                                    <Button className="w-full flex gap bg-green-500" onClick={() => handleClosedDepOpenQr()}>
                                                        Continuar <ArrowRight />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalSaque && (
                <div className="fixed z-50 inset-0 overflow-y-hidden">
                    <div className="flex items-start justify-center min-h-full px-4 pt-6 pb-20 text-center sm:items-center sm:min-h-screen sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalSaque(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top sm:align-middle bg-[#202224] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full mt-20 sm:mt-0">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="flex flex-col  gap-2 text-white">
                                        <h1 className="font-bold text-lg">Carteira</h1>
                                        <p className="text-sm">Saldo: R$ 0,00</p>
                                    </div>
                                    <div className="mt-3  sm:mt-0 sm:ml-4 text-left text-white">
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <div>
                                                        <h2 onClick={() => handleClosedSaq()} className="p-2 cursor-pointer">Depositar</h2>
                                                    </div>
                                                    <div>
                                                        <h1 onClick={() => handleClosedDep()} className="p-2 cursor-pointer">Sacar</h1>
                                                        <div className=" h-1 bg-green-500"></div>
                                                    </div>
                                                </div>
                                                <div className="text-xs flex flex-col gap-1">
                                                    <p className="bg-[#131313] rounded flex gap-1 p-1"><FileWarningIcon size={15} />  Mínimo de saque: 10,00</p>
                                                    <p className="bg-[#131313] rounded flex gap-1 p-1"><FileWarningIcon size={15} />  Máximo de saque: 3.000,00</p>
                                                    <p className="bg-[#131313] rounded flex gap-1 p-1"><FileWarningIcon size={15} />  Máx. de saque diário: 1</p>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2 flex-1">
                                                    <div className="w-full">
                                                        <Input
                                                            className="bg-[#202224] border-slate-700 w-full"
                                                            value={'R$ 10,00'}
                                                        />
                                                    </div>
                                                    <div className="w-full">
                                                        <Input
                                                            className="bg-[#202224] border-slate-700 w-full"
                                                            value={'09582117443'}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className='flex flex-1 mt-2'>
                                                    <Button className="w-full flex gap bg-green-500">
                                                        Enviar solicitação de saque <ArrowRight />
                                                    </Button>
                                                </div>
                                                <div className='mt-2 text-xs text-center'>
                                                    * O titular da conta informada para saque deve ser o mesmo que o registrado em sua conta.                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            )}
            {modalDeposito && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center sm:items-start sm:justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div onClick={() => setModalDeposito(false)} className="absolute inset-0 bg-[#202224] opacity-50"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
                            <div className="bg-[#202224] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white border-none">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                             <QrCode className="h-6 w-6 text-green-600" aria-hidden="true" /> 
                                        </div>
                                        <h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
                                            Aguardando Pagamento
                                        </h3>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-center items-center mb-2">
                                            <span className="text-xs font-medium  text-center">Expira em: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                                        </div>
                                        <Progress className='h-2 bg-green-500' value={(15 * 60 - timeLeft) / (15 * 60) * 100} />
                                    </div>
                                    <div className="flex gap-4">
                                        <div>
                                            <h2 className="p-2 cursor-pointer">Depositar</h2>
                                            <div className=" h-1 bg-green-500"></div>
                                        </div>
                                        <div>
                                            <h1 onClick={() => handleClosedQrOpenSaq()} className="p-2 cursor-pointer">Sacar</h1>
                                        </div>
                                    </div>
                                    <div onClick={handleClosedQrOpenDep} className="flex p-1 text-sm items-center gap-1 mt-2 cursor-pointer" >
                                        <ArrowLeft/>
                                        <p>Alterar valor</p>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-2 items-center">
                                                <QRCode value={paymentLink} size={160} className="p-3 bg-white rounded-lg" />
                                            </div>
                                            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 w-full">
                                                <Input
                                                    className="w-full flex-grow bg-transparent"
                                                    value={"00020101021226900014br.gov.bcb.pix2568pix.sicoob.com.br/qr/payload/v2/45b46e24-1ba2-4b18-9cf7-b13ea287817f5204000053039865802BR5925ANA MARIA DE OLIVEIRA BAR6013Nao_informado62070503***6304CC5B"}
                                                />
                                                <Button
                                                    onClick={copyToClipboard}
                                                    className="bg-green-500 text-white flex items-center gap-2 px-2 py-1 text-xs"
                                                >
                                                    {copied ? <Check size={20} /> : <Copy size={20} />}
                                                    {copied ? 'Copiado' : 'Copiar'}
                                                </Button>
                                            </div>
                                            <ol className="list-decimal list-inside mb-4 mt-2 text-left text-xs">
                                                <li>Abra seu aplicativo bancário.</li>
                                                <li>Selecione a opção de pagamento por Pix.</li>
                                                <li>
                                                    Escaneie o QR code abaixo ou copie o código para realizar o pagamento.
                                                </li>
                                                <li>Confirme o valor e o beneficiário, e conclua o pagamento.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#202224] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Button onClick={() => setModalWallet(false)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-100 sm:ml-3 sm:w-auto sm:text-sm">
                                    Concluido
                                </Button>
                                <Button
                                    onClick={() => setModalDeposito(false)}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}