import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Exquisite Gemstones, Authentically Sourced
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 text-slate-200 max-w-2xl"
          >
            We export premium, ethically sourced gemstones and minerals to discerning buyers worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a href="#gallery" className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition">Explore Collection</a>
            <a href="#inquiry" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Make an Inquiry</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
