import { PiePagina } from "../components/moleculas/PiePagina.jsx";
import { Toaster } from "react-hot-toast";

export function HomePage({ sections }) {
  return (
    <>
      {sections.map(({ id, ref, Component }) => (
        <div key={id} ref={ref} id={id}>
          {Component && <Component />}
        </div>
      ))}

      <PiePagina />

      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}
