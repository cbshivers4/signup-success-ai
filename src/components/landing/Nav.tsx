import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full glass backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30">
            <Sparkles className="size-4" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white">
            TRAFFIC<span className="text-brand">BOOST</span> AI
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#referral" className="hover:text-white transition-colors">Referral</a>
          <Link to="/auth" className="hover:text-white transition-colors">Login</Link>
        </div>
        <Link
          to="/auth"
          className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white shadow-lg shadow-brand/30 hover:brightness-110 transition-all active:scale-95"
        >
          Start Free
        </Link>
      </div>
    </nav>
  );
}

