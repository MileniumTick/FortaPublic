/* eslint-disable react/react-in-jsx-scope */
import { useState } from "preact/hooks";




export function Contactos() {

    const [servicio, setServicio] = useState("");

    const servicios = ["Obras", "Inventario", "Planes", "Sistemas", "Abogados"];


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(servicio);
    // }


    const handleInput = (e) => {
        setServicio(e.target.value);
    }


    return <>
        <div id="layoutContactos">
            <div className=" min-h-screen p-4 text-gray-700 bg-gradient-to-tr to-gray-100 from-gray-300 md:p-20">
                <div className="shadow-md shadow-slate-500 grid lg:grid-cols-2 grid-flow-row items-center justify-center" >
                <h2 className="text-3xl font-medium bg-gradient-to-bl to-gray-300 from-gray-100 h-full text-center align-middle lg:pt-40">Contacto</h2>
                <form className="flex flex-col lg:pl-4 p-2 gap-4 pt-2 bg-slate-50">
                    <div className="flex flex-col gap-">
                        <label htmlFor="nombre" className="text-lg">Correo</label>
                        <input type="text" id="nombre" className="w-full p-2 border border-gray-300 rounded-sm" placeholder="Ingrese su correo electrónico" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="nombre" className="text-lg">Teléfono</label>
                        <input type="text" id="nombre" className="w-full p-2 border border-gray-300 rounded-sm" placeholder="Ingrese su número telefónico"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="nombre" className="text-lg">Servicios</label>
                        <div>
                            <input type="text" id="nombre" value={servicio} className="w-full p-2 border border-gray-300 rounded-sm" onInput={handleInput} placeholder="Busque el servicio requerido"/>

                            <ul>{
                                servicios.filter(item => {
                                    if (servicio === '') {
                                        return '';
                                    } else if (item.toLowerCase() === servicio.toLowerCase()) {
                                        return '';
                                    } else if (item.toLowerCase().startsWith(servicio.toLowerCase())) {
                                        return item;
                                    }
                                }).map((servicios) => (

                                    <li className="box overflow-auto flex table-fixed cursor-pointer text-center p-2 mt-0 bg-slate-400/10 rounded-sm" key={servicios} onClick={() => setServicio(servicios)}>
                                        {servicios}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex justify-between items-center py-2 border-b dark:border-gray-600">
                            <label htmlFor="nombre" className="text-lg">Su mótivo de contacto</label>
                        </div>
                        <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800 border border-collapse border-gray-200">
                            <label className="sr-only">Enviar</label>
                            <textarea id="editor" rows="4" className="block px-0 w-full text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escribe tu mótivo..." required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="inline-flex w-44 px-5 mb-2 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800">
                        Enviar
                    </button>
                </form>
                </div>
            </div>
        </div>
    </>
}