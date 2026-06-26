import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from  "./componnets/navbar"; // Ajusta la ruta según tu estructura

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Late Ghost: Capital",
  description: "Arte y gestos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#f3ecdc] m-0 p-0">
        <Navbar />
        <main className="flex-1 pt-20 bg-[#f3ecdc]">
          {children}
        </main>
      </body>
    </html>
  );
}