import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-wide text-white">
          Corte<span className="text-brand">Fino</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/reservar"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-ink transition hover:bg-brand-light"
        >
          Reservar
        </Link>
      </nav>
    </header>
  );
}
