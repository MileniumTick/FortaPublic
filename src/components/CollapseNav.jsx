/* eslint-disable react/react-in-jsx-scope */
import { useState } from "preact/hooks";

export function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return <>
        <nav className="flex bg-fixed items-center justify-between flex-wrap bg-slate-900/90 p-3" fixed="top">
            
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="block lg:hidden mr-3" >
                    <button
                        onClick={() => toggle()}
                        className="flex items-center px-3 py-2 border rounded shadow-lg shadow-gray-900/50 text-gray-200 border-gray-400 hover:text-white hover:border-white"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-10 h-10 lg:flex hidden mr-2">
                <img className="rounded-md border-collapse border-opacity-70 border-2 shadow-lg shadow-slate-400/50"src="./src/components/images/Imagen1.png" alt="logo" />
                </div>
                <span className="font-bold text-xl tracking-tight" >FortaMuni</span>
            </div>

            <div
                className={`w-full transition duration-200 ease-in flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="text-sm lg:flex-grow">
                    <a href="#"><p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer">
                        Inicio
                    </p></a>
                    <a href="#layoutPrecios"><p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer">
                        Servicios
                    </p></a>
                    <a href="#layoutConsultores"><p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer">
                        Consultores
                    </p></a>
                    <a href="#layoutContactos"><p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer">
                        Contactenos
                    </p></a>
                </div>
            </div>
            <div className="lg:hidden flex w-10 h-10">
                <img className="rounded-md border-collapse border-opacity-70 border-2 shadow-lg shadow-slate-400/50"src="./src/components/images/Imagen1.png" alt="logo" />
            </div>
            
        </nav>
    </>
}
