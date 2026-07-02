import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#signup"
        className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-brand/40 ring-4 ring-brand/20 transition-transform hover:-translate-y-0.5"
      >
        Start Free
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
