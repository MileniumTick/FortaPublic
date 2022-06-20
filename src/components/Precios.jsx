/* eslint-disable react/react-in-jsx-scope */
const avatarPrecios = (id) => (
    <svg id={id} className="xs:visible invisible border border-collapse hover:animate-pulse border-slate-600 shadow-lg squared rounded-md shadow-slate-500 fill-current text-slate-600" width="35px" height="35px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd" transform="translate(2 2)">
            <path
                d="m8.5 14.5c3.3285018 0 6-2.6447124 6-5.97321429 0-3.32850184-2.6714982-6.02678571-6-6.02678571-3.32850184 0-6 2.69828387-6 6.02678571 0 3.32850189 2.67149816 5.97321429 6 5.97321429z"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8.5" cy="8.5" fill="currentColor" r="3.5" />
            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="m.5 8.5h2" />
                <path d="m14.5 8.5h2" />
                <path d="m7.5 1.5h2" transform="matrix(0 1 -1 0 10 -7)" />
                <path d="m7.5 15.5h2" transform="matrix(0 1 -1 0 24 7)" />
            </g>
        </g>
    </svg>
)

const servicios = [
    {
        titulo: "Obras",
        subtitulo: "MileniumTick",
        caracteristica: "Planes de obras integrados con el sistema de gestión de obras públicas y transportes.",
        caracteristica2: "https://mileniumtick.github.io/react-gifexpertapp/",
    },
    {
        titulo: "Inventario",
        subtitulo: "MileniumTick",
        caracteristica: "https://github.com/MileniumTick/react-gifexpertapp",
        caracteristica2: "https://mileniumtick.github.io/react-gifexpertapp/",
    },
    {
        titulo: "Planes",
        subtitulo: "MileniumTick",
        caracteristica: "https://github.com/MileniumTick/react-gifexpertapp",
        caracteristica2: "https://mileniumtick.github.io/react-gifexpertapp/",
    },
    {
        titulo: "Sistemas",
        subtitulo: "MileniumTick",
        caracteristica: "https://github.com/MileniumTick/react-gifexpertapp",
        caracteristica2: "https://mileniumtick.github.io/react-gifexpertapp/",
    },
    {
        titulo: "Abogados",
        subtitulo: "MileniumTick",
        caracteristica: "https://github.com/MileniumTick/react-gifexpertapp",
        caracteristica2: "https://mileniumtick.github.io/react-gifexpertapp/",
    },

];

export function Precios() {
    return <>
            <div id="layoutPrecios">
                <div className="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20">
                    <h2 className="text-3xl font-medium">Nuestros Servicios</h2>

                    <div className="lg:flex flex-wrap items-center justify-center w-full mt-8 gap-10">
                        {servicios.map(({titulo, subtitulo, caracteristica, caracteristica2}) => (
                            <div key={titulo} id={titulo} className="flex transform transition duration-300 ease-in-out hover:-translate-y-2 lg:max-w-sm gap-4 flex-col flex-grow mt-8 min-h-full overflow-hidden bg-white rounded-lg shadow-lg">
                                <div className="flex flex-row items-center p-5 bg-gray-200">
                                    {avatarPrecios(titulo)}
                                    <span className="ml-5 flex text-lg font-semibold">{titulo}</span>

                                </div>
                                <div className="lg:p-10 text-left flex lg:h-96 h-full mix-blend-hard-light lg:break-normal break-all">
                                    <ul className="max-w-max">
                                        <li className="block m-4 items-center">
                                            <span className="row-span-4 text-lg">{subtitulo}</span>
                                        </li>
                                        <li className="flex items-center h-auto p-2">
                                            <svg className="sm:visible invisible min-w-max min-h-max max-h-5 max-w-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2">{caracteristica}</span>
                                        </li>
                                        <li className="flex items-center p-2">
                                            <svg className="sm:visible  invisible min-w-max min-h-max max-h-5 max-w-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2">{caracteristica2}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                        )}
                        
                    </div>
                </div>
            </div>
    </>
}