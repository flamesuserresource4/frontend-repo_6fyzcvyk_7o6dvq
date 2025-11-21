export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Asteria Gems</h2>
          <p className="text-slate-300 mt-4">We are a global exporter of fine gemstones and minerals. Our mission is to connect exceptional stones with exceptional people, responsibly and transparently.</p>
          <div className="mt-6 space-y-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">Over a decade of ethical sourcing across Africa, South America, and Asia.</div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">Traceability and certification provided for every purchase.</div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">Dedicated team of gemologists and logistics experts.</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['/gems/diamond.jpg','/gems/ruby.jpg','/gems/emerald.jpg','/gems/sapphire.jpg','/gems/amethyst.jpg','/gems/opals.jpg'].map((src,i)=> (
            <img key={i} src={src} alt="team" className="rounded-lg border border-white/10 object-cover h-28 w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
