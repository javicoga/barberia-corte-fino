"use client";

import { useState } from "react";
import { services } from "@/data/services";
import Calendar from "@/components/Calendar";

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

export default function ReservationForm({ defaultService = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService,
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Escribe tu nombre.";
    if (!/^[0-9+\s]{7,}$/.test(form.phone.trim())) e.phone = "Teléfono no válido.";
    if (!form.service) e.service = "Elige un servicio.";
    if (!form.date) e.date = "Elige una fecha.";
    if (!form.time) e.time = "Elige una hora.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("error");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    const service = services.find((s) => s.id === form.service);
    return (
      <div className="rounded-2xl border border-brand/40 bg-brand/10 p-8 text-center">
        <div className="text-5xl">✅</div>
        <h2 className="mt-4 font-display text-2xl font-bold text-white">
          ¡Reserva confirmada!
        </h2>
        <p className="mt-3 text-zinc-300">
          {form.name}, te esperamos el <strong>{form.date}</strong> a las{" "}
          <strong>{form.time}</strong> para tu <strong>{service?.name}</strong>.
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Te enviaremos un recordatorio al {form.phone}.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", phone: "", service: "", date: "", time: "" });
            setStatus("idle");
          }}
          className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition hover:border-brand hover:text-brand"
        >
          Hacer otra reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
    >
      <Field label="Nombre" error={errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Tu nombre"
          className="input"
        />
      </Field>

      <Field label="Teléfono" error={errors.phone}>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+34 600 000 000"
          className="input"
        />
      </Field>

      <Field label="Servicio" error={errors.service}>
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="input"
        >
          <option value="">Elige un servicio…</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} — {s.price}€
            </option>
          ))}
        </select>
      </Field>

      <Field label="Fecha" error={errors.date}>
        <Calendar value={form.date} onChange={(d) => update("date", d)} />
      </Field>

      <Field label="Hora" error={errors.time}>
        <select
          value={form.time}
          onChange={(e) => update("time", e.target.value)}
          className="input"
        >
          <option value="">Elige hora…</option>
          {timeSlots.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      {status === "error" && (
        <p className="rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-300">
          Algo salió mal. Inténtalo de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand py-3 font-semibold text-ink transition hover:bg-brand-light disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Confirmar reserva"}
      </button>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.3);
          padding: 0.7rem 0.9rem;
          color: #e4e4e7;
          outline: none;
        }
        :global(.input:focus) {
          border-color: #c89b3c;
        }
        /* Opciones del desplegable: texto claro sobre fondo oscuro, alto contraste */
        :global(.input option) {
          background: #1a1814;
          color: #ffffff;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
