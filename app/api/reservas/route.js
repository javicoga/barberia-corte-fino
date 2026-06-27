import { NextResponse } from "next/server";

// Almacén en memoria (demo). En producción se conectaría a una base de datos.
const reservas = [];

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, service, date, time } = data;

    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const reserva = {
      id: crypto.randomUUID(),
      name,
      phone,
      service,
      date,
      time,
      createdAt: new Date().toISOString(),
    };
    reservas.push(reserva);

    // Aquí enviarías un email/SMS o guardarías en base de datos.
    console.log("Nueva reserva:", reserva);

    return NextResponse.json({ ok: true, reserva }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Petición inválida." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, total: reservas.length, reservas });
}
