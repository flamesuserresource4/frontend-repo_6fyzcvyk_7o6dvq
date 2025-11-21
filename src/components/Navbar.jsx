import { Menu, Gem } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <Gem className="w-6 h-6 text-blue-400" />
          Asteria Gems
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#booking" className="hover:text-white">Booking</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </header>
  );
}
