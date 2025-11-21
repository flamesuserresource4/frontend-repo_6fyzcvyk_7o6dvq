import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import InquiryBooking from './components/InquiryBooking';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Gallery />
        <InquiryBooking />
        <About />
        <Contact />
        <footer className="py-10 text-center text-slate-400 border-t border-white/10">
          © {new Date().getFullYear()} Asteria Gems. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
