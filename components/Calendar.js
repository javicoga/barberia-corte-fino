"use client";

import { useState } from "react";

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const WEEKDAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

// Formatea una fecha como "YYYY-MM-DD" sin problemas de zona horaria.
function toISO(year, month, day) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export default function Calendar({ value, onChange }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Mes que se muestra: el de la fecha elegida, o el actual.
  const initial = value ? new Date(value + "T00:00:00") : today;
  const [view, setView] = useState({
    year: initial.getFullYear(),
    month: initial.getMonth(),
  });

  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  // Día de la semana del día 1, empezando en lunes (0 = lunes).
  const firstWeekday = (new Date(view.year, view.month, 1).getDay() + 6) % 7;

  function changeMonth(delta) {
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  // No permitir retroceder a meses anteriores al actual.
  const isPastMonth =
    view.year < today.getFullYear() ||
    (view.year === today.getFullYear() && view.month <= today.getMonth());

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-3">
      {/* Cabecera con navegación de mes */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={isPastMonth}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Mes anterior"
        >
          ‹
        </button>
        <span className="text-sm font-semibold text-white">
          {MONTHS[view.month]} {view.year}
        </span>
        <button
          type="button"
          onClick={() => changeMonth(1)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/10"
          aria-label="Mes siguiente"
        >
          ›
        </button>
      </div>

      {/* Nombres de los días */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-zinc-500">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1">{w}</span>
        ))}
      </div>

      {/* Días del mes */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <span key={`e${i}`} />;

          const iso = toISO(view.year, view.month, day);
          const dateObj = new Date(view.year, view.month, day);
          const weekday = dateObj.getDay(); // 0 = domingo
          const isPast = dateObj < today;
          const isSunday = weekday === 0;
          const disabled = isPast || isSunday; // domingo cerrado
          const isSelected = value === iso;

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onChange(iso)}
              className={[
                "flex h-9 items-center justify-center rounded-lg text-sm transition",
                isSelected
                  ? "bg-brand font-bold text-ink"
                  : disabled
                  ? "cursor-not-allowed text-zinc-600 line-through"
                  : "text-zinc-200 hover:bg-white/10",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-zinc-500">
        Domingos cerrado
      </p>
    </div>
  );
}
