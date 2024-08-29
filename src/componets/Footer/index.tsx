import IconsList from "../IconsList";

export default function Footer() {
  return (
    <section className="w-full bg-slate-950 text-white">
      <div className="p-4 flex justify-center items-center w-full flex-col">
        <h2 className="text-base my-4">Portfólio de João Miguel</h2>
        <IconsList />
      </div>
      <div className="bg-gray-950 w-full flex justify-center items-center p-2">
        <span className="text-center text-xs text-gray-300">
          &#169; João Miguel A. Lopes, RJ, Brazil. Direitos parcialmente
          reservados.
        </span>
      </div>
    </section>
  );
}
