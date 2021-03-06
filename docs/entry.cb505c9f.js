import { d as o } from "./chunks/chunk.73163bcf.js";
import { e } from "./chunks/chunk.540f10bb.js";
import { d as i } from "./chunks/chunk.fa6ba68c.js";
function c() {
  const [r, l] = o(!1),
    t = () => l(!r);
  return e(i, {
    children: e("nav", {
      className:
        "flex bg-fixed items-center justify-between flex-wrap bg-slate-900/90 p-3",
      fixed: "top",
      children: [
        e("div", {
          className: "flex items-center flex-shrink-0 text-white mr-6",
          children: [
            e("div", {
              className: "block lg:hidden mr-3",
              children: e("button", {
                onClick: () => t(),
                className:
                  "flex items-center px-3 py-2 border rounded shadow-lg shadow-gray-900/50 text-gray-200 border-gray-400 hover:text-white hover:border-white",
                children: e("svg", {
                  className: "fill-current h-3 w-3",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    e("title", { children: "Menu" }),
                    e("path", {
                      d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
                    }),
                  ],
                }),
              }),
            }),
            e("div", {
              className: "w-10 h-10 lg:flex hidden mr-2",
              children: e("img", {
                className:
                  "rounded-md border-collapse border-opacity-70 border-2 shadow-lg shadow-slate-400/50",
                src: "./images/Imagen1.png",
                alt: "logo",
              }),
            }),
            e("span", {
              className: "font-bold text-xl tracking-tight",
              children: "FortaMuni",
            }),
          ],
        }),
        e("div", {
          className: `w-full transition duration-200 ease-in flex-grow lg:flex lg:items-center lg:w-auto ${
            r ? "block" : "hidden"
          }`,
          children: e("div", {
            className: "text-sm lg:flex-grow",
            children: [
              e("a", {
                href: "#",
                children: e("p", {
                  className:
                    "block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer",
                  children: "Inicio",
                }),
              }),
              e("a", {
                href: "#layoutPrecios",
                children: e("p", {
                  className:
                    "block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer",
                  children: "Servicios",
                }),
              }),
              e("a", {
                href: "#layoutConsultores",
                children: e("p", {
                  className:
                    "block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer",
                  children: "Consultores",
                }),
              }),
              e("a", {
                href: "#layoutContactos",
                children: e("p", {
                  className:
                    "block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer",
                  children: "Contactenos",
                }),
              }),
            ],
          }),
        }),
        e("div", {
          className: "lg:hidden flex w-10 h-10",
          children: e("img", {
            className:
              "rounded-md border-collapse border-opacity-70 border-2 shadow-lg shadow-slate-400/50",
            src: "./images/Imagen1.png",
            alt: "logo",
          }),
        }),
      ],
    }),
  });
}
export { c as Nav };
