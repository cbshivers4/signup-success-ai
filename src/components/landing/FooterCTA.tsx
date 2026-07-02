import { ArrowRight, Sparkles } from "lucide-react";

export function FooterCTA() {
  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Grow Your Business with{" "}
            <span className="text-gradient-brand">AI?</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Join thousands of entrepreneurs using TrafficBoost AI to generate traffic,
            capture leads, and increase sales.
          </p>
          <div className="mt-10">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-brand/40 transition-transform hover:scale-105 active:scale-95"
            >
              Start Free Today
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-white/[0.02] px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-md bg-brand text-white">
              <Sparkles className="size-3.5" />
            </div>
            <span className="text-sm font-extrabold tracking-tight text-white">
              TRAFFIC<span className="text-brand">BOOST</span> AI
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Login</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} TrafficBoost AI
          </p>
        </div>
      </footer>
    </>
  );
}
