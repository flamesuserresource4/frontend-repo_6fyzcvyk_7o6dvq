import { useEffect, useMemo, useState } from 'react';
import { apiGet } from '../utils/api';

const sample = [
  { id: '1', name: 'Brilliant Diamond', type: 'Diamond', color: 'Colorless', origin: 'Botswana', price: 20000, availability: 'in_stock', images: ['/gems/diamond.jpg'] },
  { id: '2', name: 'Pigeon Blood Ruby', type: 'Ruby', color: 'Red', origin: 'Myanmar', price: 15000, availability: 'limited', images: ['/gems/ruby.jpg'] },
  { id: '3', name: 'Emerald Cut Emerald', type: 'Emerald', color: 'Green', origin: 'Colombia', price: 12000, availability: 'in_stock', images: ['/gems/emerald.jpg'] },
];

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ type: 'All', color: 'All', origin: 'All' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const qs = new URLSearchParams();
        if (filters.type !== 'All') qs.set('type', filters.type);
        if (filters.color !== 'All') qs.set('color', filters.color);
        if (filters.origin !== 'All') qs.set('origin', filters.origin);
        const res = await apiGet(`/gemstones?${qs.toString()}`);
        if (mounted) setItems(res);
      } catch (e) {
        // fallback demo data if backend empty/unavailable
        if (mounted) setItems(sample);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, [filters]);

  const types = useMemo(() => ['All', ...Array.from(new Set([...(items?.map(i=>i.type)||[]), ...sample.map(i=>i.type)]))], [items]);
  const colors = useMemo(() => ['All', ...Array.from(new Set([...(items?.map(i=>i.color)||[]), ...sample.map(i=>i.color)]))], [items]);
  const origins = useMemo(() => ['All', ...Array.from(new Set([...(items?.map(i=>i.origin)||[]), ...sample.map(i=>i.origin)]))], [items]);

  return (
    <section id="gallery" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Product Gallery</h2>
            <p className="text-slate-300 mt-2">Browse our curated selection of gemstones and minerals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <select value={filters.type} onChange={e=>setFilters({...filters, type: e.target.value})} className="bg-slate-900/70 border border-white/10 text-white rounded-lg px-3 py-2">
              {types.map(v=> <option key={v}>{v}</option>)}
            </select>
            <select value={filters.color} onChange={e=>setFilters({...filters, color: e.target.value})} className="bg-slate-900/70 border border-white/10 text-white rounded-lg px-3 py-2">
              {colors.map(v=> <option key={v}>{v}</option>)}
            </select>
            <select value={filters.origin} onChange={e=>setFilters({...filters, origin: e.target.value})} className="bg-slate-900/70 border border-white/10 text-white rounded-lg px-3 py-2">
              {origins.map(v=> <option key={v}>{v}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? sample : items).map(item => (
            <article key={item.id} className="group bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.images?.[0] || '/placeholder.jpg'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-slate-300 text-sm">{item.type} • {item.color} • {item.origin}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">${item.price.toLocaleString()}</span>
                  <a href="#inquiry" className="text-white/80 hover:text-white text-sm">Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
