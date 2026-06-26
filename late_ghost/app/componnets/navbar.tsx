import Link from "next/link";
import { House, Orbit, User, ShoppingBag, Palette } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#c9c0b1] flex items-center px-4 md:px-8 z-50 shadow-sm">
      {/* Iconos a la izquierda */}
      <div className="flex items-center gap-4">
        <Link href="/" className="text-[#464439] hover:text-[#bc613f] transition-colors">
          <House size={22} />
        </Link>
        <Link href="/gallery" className="text-[#464439] hover:text-[#bc613f] transition-colors">
          <Palette size={22} />
        </Link>
        <Link href="/porfile" className="text-[#464439] hover:text-[#bc613f] transition-colors">
          <User size={22} />
        </Link>
        <Link href="/merch" className="text-[#464439] hover:text-[#bc613f] transition-colors">
          <ShoppingBag size={22} />
        </Link>
      </div>

      {/* Título centrado */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-[#464439] font-medium text-lg whitespace-nowrap">
        Late Ghost: Capital
      </div>
    </nav>
  );
}