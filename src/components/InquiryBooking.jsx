import { useState } from 'react';
import { apiPost } from '../utils/api';

export default function InquiryBooking() {
  const [tab, setTab] = useState('inquiry');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      setStatus('Submitting...');
      const path = tab === 'inquiry' ? '/inquiries' : '/bookings';
      const payload = { ...data };
      const res = await apiPost(path, payload);
      setStatus(`Success! Reference: ${res.id}`);
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="inquiry" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={()=>setTab('inquiry')} className={`${tab==='inquiry'?'bg-blue-500 text-white':'bg-white/10 text-white/80'} px-4 py-2 rounded-full`}>Inquiry</button>
          <button onClick={()=>setTab('booking')} className={`${tab==='booking'?'bg-blue-500 text-white':'bg-white/10 text-white/80'} px-4 py-2 rounded-full`}>Booking</button>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-semibold">{tab==='inquiry' ? 'Product Inquiry' : 'Schedule a Consultation'}</h3>
          </div>
          <input name="name" required placeholder="Full Name" className="bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          <input name="email" required type="email" placeholder="Email" className="bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          <input name="phone" placeholder="Phone" className="bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          <input name="gemstone_id" placeholder="Gemstone ID (optional)" className="bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          {tab==='booking' && (
            <input name="date" type="datetime-local" className="bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          )}
          <div className="md:col-span-2">
            <textarea name="message" rows="4" placeholder="Your message" className="w-full bg-slate-950/60 border border-white/10 text-white rounded-lg px-3 py-2" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-slate-300 text-sm">We respond within 24 hours. Your data is protected.</p>
            <button className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition">Submit</button>
          </div>
          {status && <div className="md:col-span-2 text-slate-200">{status}</div>}
        </form>
      </div>
    </section>
  );
}
