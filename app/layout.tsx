import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-lider-web.vercel.app"),
  title: "Líder Salinas | Fullstack Developer",
  description:
    "Portafolio de Líder Salinas – Desarrollador Fullstack (React/Next.js y Python/FastAPI). Proyectos, skills y contacto.",
  openGraph: {
    title: "Líder Salinas | Fullstack Developer",
    description:
      "Desarrollador Fullstack con experiencia en React/Next.js y Python/FastAPI. Portafolio con proyectos y demos.",
    url: "https://portfolio-lider-web.vercel.app",
    siteName: "Portafolio de Líder Salinas",
    images: ["/og.jpg"], // opcional: poné /public/og.jpg (1200x630)
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Líder Salinas | Fullstack Developer",
    description:
      "Portafolio profesional con proyectos React/Next.js y APIs en Python/FastAPI.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
