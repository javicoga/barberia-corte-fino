export const metadata = {
  title: "Contacto — Barbería Corte Fino",
  description: "Encuéntranos en el centro. Teléfono, email, dirección y horario.",
};

export default function ContactoPage() {
  return (
    <section className="py-20">
      <div className="container-narrow grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Contacto
          </p>
          <h1 className="font-display text-4xl font-bold text-white">
            Hablemos
          </h1>
          <p className="mt-4 text-zinc-400">
            ¿Dudas o quieres reservar por teléfono? Estamos a un mensaje de
            distancia.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                Dirección
              </dt>
              <dd className="mt-1 text-zinc-300">Calle Mayor 12, Centro</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                Teléfono
              </dt>
              <dd className="mt-1 text-zinc-300">+34 600 123 456</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                Email
              </dt>
              <dd className="mt-1 text-zinc-300">hola@cortefino.com</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                Horario
              </dt>
              <dd className="mt-1 text-zinc-300">
                Lun–Vie 10–20h · Sáb 10–18h · Dom cerrado
              </dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Mapa de ubicación"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-3.708%2C40.415%2C-3.700%2C40.420&layer=mapnik"
            className="h-full min-h-[400px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
