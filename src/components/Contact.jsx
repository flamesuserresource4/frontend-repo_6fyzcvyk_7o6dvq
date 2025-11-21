export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-slate-300 mt-3">Reach us anytime via email or phone. Follow our social channels for updates.</p>
          <div className="mt-6 space-y-2 text-slate-300">
            <p>Email: hello@asteriagems.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div className="mt-4 flex gap-4 text-white/80">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14%2C51.50%2C-0.10%2C51.52&layer=mapnik"
            className="w-full h-64 md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
