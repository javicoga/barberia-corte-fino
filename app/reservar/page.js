import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "Reservar cita — Barbería Corte Fino",
  description: "Reserva tu cita online: elige servicio, día y hora en segundos.",
};

export default function ReservarPage({ searchParams }) {
  const defaultService = searchParams?.servicio || "";

  return (
    <section className="py-20">
      <div className="container-narrow grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Reservas
          </p>
          <h1 className="font-display text-4xl font-bold text-white">
            Reserva tu cita
          </h1>
          <p className="mt-4 text-zinc-400">
            Rellena el formulario y te confirmamos al instante. Sin llamadas, sin
            esperas.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-zinc-300">
            <li className="flex gap-3">
              <span className="text-brand">✓</span> Confirmación inmediata
            </li>
            <li className="flex gap-3">
              <span className="text-brand">✓</span> Recordatorio por mensaje
            </li>
            <li className="flex gap-3">
              <span className="text-brand">✓</span> Cancela o cambia cuando quieras
            </li>
          </ul>
        </div>

        <ReservationForm defaultService={defaultService} />
      </div>
    </section>
  );
}
