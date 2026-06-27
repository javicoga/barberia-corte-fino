import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container-narrow grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-white">
            Corte<span className="text-brand">Fino</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Barbería clásica con alma moderna. Cuidamos tu imagen desde 2015.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Horario
          </p>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>Lun – Vie: 10:00 – 20:00</li>
            <li>Sábado: 10:00 – 18:00</li>
            <li>Domingo: cerrado</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Visítanos
          </p>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>Calle Mayor 12, Centro</li>
            <li>+34 600 123 456</li>
            <li>hola@cortefino.com</li>
          </ul>
          <Link
            href="/reservar"
            className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-light"
          >
            Reservar cita →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-narrow text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Barbería Corte Fino. Proyecto de portafolio.
        </p>
      </div>
    </footer>
  );
}
