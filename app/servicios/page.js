import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Servicios — Barbería Corte Fino",
  description: "Cortes, barba, afeitado a navaja, tinte y más. Consulta precios y duración.",
};

export default function ServiciosPage() {
  return (
    <section className="py-20">
      <div className="container-narrow">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Servicios
        </p>
        <h1 className="font-display text-4xl font-bold text-white">
          Todo lo que ofrecemos
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Precios cerrados y tiempos estimados para que organices tu visita sin
          sorpresas.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-white">{s.name}</h2>
                <span className="text-lg font-bold text-brand">{s.price}€</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-zinc-400">{s.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  {s.duration}
                </span>
                <Link
                  href={`/reservar?servicio=${s.id}`}
                  className="text-sm font-semibold text-brand hover:text-brand-light"
                >
                  Reservar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
