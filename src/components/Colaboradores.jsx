/* eslint-disable react/react-in-jsx-scope */
const colaboradores = [{
    nombre: "Saskya Carolina Montealegre",
    cargo: "Ingeniera Civil e Ingeniera Industrial",
    numeroCertificaciones: 3,
    certificaciones: "Certificación de Ingeniería Civil e Ingeniería Industrial",
    fotoPerfil:"https://scontent.ftgu2-2.fna.fbcdn.net/v/t39.30808-1/275182265_5008529615836662_2745696333221791652_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GF2XAnJ4cM4AX9-ZzVd&_nc_ht=scontent.ftgu2-2.fna&oh=00_AT_5DgnF39GzAJSqiATKhjMS1zeRBpBSYLUPYjWJxJh8wQ&oe=62B4F766",
    descripcion:"Ingeniera Civil e Ingeniera Industrial con más de 15 años de experiencia en getión de municipalidades en todo Costa Rica.",
},
{
    nombre: "Josue Chavarria Montealegre",
    cargo: "Consultor de ingeniería en sistemas y desarrollo de software",
    numeroCertificaciones: 2,
    certificaciones: "AZ-900: Azure Fundamentals Certified Architect, PL-900 Power Platforms Fundamentals Certified",
    fotoPerfil:"https://scontent.ftgu2-2.fna.fbcdn.net/v/t39.30808-1/258423544_1731783343683261_4088064487777830231_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bGKrc5AIVdIAX-gpZVy&tn=c36j90LurqpLR8GN&_nc_ht=scontent.ftgu2-2.fna&oh=00_AT_19bh1COU5ThxU8KPTqEN5Tzwao_XkZgvI6f6W4PMjCg&oe=62B44B45",
    descripcion:"Consultor de tecnología y desarollo de aplicaciones en todos los ambitos con mas de 2 años de experiencía en la implementación de aplicaciones para compañias como Establishment Labs y BNValores del Banco de Costa Rica.",
}];

export function Colaboradores() {
    return <>   <div id="layoutConsultores" className="container min-h-screen min-w-full lg:p-10 p-2 bg-slate-300/50">
        {colaboradores.map(({nombre, cargo, numeroCertificaciones, certificaciones, fotoPerfil, descripcion}) => (
        <div key={nombre} className='flex items-center justify-center min-h-fit mt-4 mb-4'>  <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
            <div className="lg:flex p-1 w-full items-center justify-between border-b pb-3">
                <div className="lg:flex grid grid-flow-row text-center items-center">
                    <img className='lg:m-0 m-auto h-10 w-10 rounded-3xl bg-slate-400' src={fotoPerfil}></img>
                    <div className="lg:text-base text-xs ml-2 font-bold text-slate-700">{nombre}</div>
                </div>
                <div className="lg:flex grid grid-flow-row m-2 gap-2 items-center space-x-8">
                    <button className="lg:rounded-md squared lg:w-auto w-full border bg-neutral-100 px-3 py-1 text-xs font-semibold">{cargo}</button>
                    <div className="text-xs text-neutral-500">{numeroCertificaciones} Certificados</div>
                </div>
            </div>

            <div className="mt-4 mb-6">
                <div className="mb-3 text-xl font-bold">{certificaciones}</div>
                <div className="text-sm text-neutral-600">{descripcion}</div>
            </div>
        </div>
        </div>
    ))}</div></>
}