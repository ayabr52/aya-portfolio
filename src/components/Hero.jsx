import Typing from "./Typing";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="pt-20 pb-32 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Frontend | Backend Developer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-5xl font-bold text-fuchsia-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] inline-block">
            Aya Barghouth
          </span>

          <span className="inline-block ml-2 align-middle">
            <Typing />
          </span>

          <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mt-3">
            I build elegant, fast web experiences.
          </span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base max-w-md">
          Passionate about crafting beautiful interfaces with React, Tailwind,
          and modern web tools.
        </p>

        <div className="flex gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-fuchsia-500 text-slate-950 font-medium shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border border-slate-600 hover:border-fuchsia-400 hover:text-fuchsia-300 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-16 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-black/40">
          <p className="text-xs text-slate-400 mb-3">Current Focus</p>
          <h2 className="text-lg font-semibold mb-2">
            Frontend Architecture & Design Systems
          </h2>
          <p className="text-sm text-slate-300">
            Building reusable components, scalable layouts, and delightful
            micro‑interactions.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Tailwind", "TypeScript", "Design Systems"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-slate-800/80 border border-slate-700 text-slate-200"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
