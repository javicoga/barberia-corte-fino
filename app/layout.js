import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Barbería Corte Fino — Estilo clásico, manos expertas",
  description:
    "Barbería en el centro de la ciudad. Cortes clásicos y modernos, arreglo de barba y afeitado a navaja. Reserva tu cita online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
