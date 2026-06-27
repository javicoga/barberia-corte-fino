import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-ink to-ink" />
        <div className="container-narrow relative grid items-center gap-10 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Barbería · desde 2015
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Estilo clásico,
              <br />
              manos expertas.
            </h1>
            <p className="mt-6 max-w-md text-lg text-zinc-400">
              Cortes que te hacen sentir tú mismo. Reserva en segundos y déjate
              cuidar por nuestros barberos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservar"
                className="rounded-full bg-brand px-7 py-3 font-semibold text-ink transition hover:bg-brand-light"
              >
                Reservar cita
              </Link>
              <Link
                href="/servicios"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-brand hover:text-brand"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/hero.png"
                alt="Barbero cortando el pelo a un cliente en la barbería"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="border-t border-white/10 py-20">
        <div className="container-narrow">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">
                Nuestros servicios
              </h2>
              <p className="mt-2 text-zinc-400">
                Precios claros, sin sorpresas. Elige el tuyo.
              </p>
            </div>
            <Link
              href="/servicios"
              className="hidden text-sm font-semibold text-brand hover:text-brand-light md:block"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                  <span className="text-lg font-bold text-brand">{s.price}€</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400">{s.description}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-zinc-500">
                  {s.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-r from-brand/10 to-transparent py-20">
        <div className="container-narrow flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            ¿Listo para tu próximo corte?
          </h2>
          <p className="max-w-xl text-zinc-400">
            Reserva online en menos de un minuto. Elige día, hora y servicio.
          </p>
          <Link
            href="/reservar"
            className="rounded-full bg-brand px-8 py-3 font-semibold text-ink transition hover:bg-brand-light"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
