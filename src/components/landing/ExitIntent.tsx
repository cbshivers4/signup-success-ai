import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Sparkles, X } from "lucide-react";

const emailSchema = z.string().trim().email().max(255);
const STORAGE_KEY = "tb_exit_shown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
        document.removeEventListener("mouseleave", onLeave);
      }
    };
    // Delay so it doesn't fire on page-load pointer noise.
    const t = setTimeout(() => document.addEventListener("mouseleave", onLeave), 2000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setErr("Enter a valid email");
      return;
    }
    // TODO: wire to Lovable Cloud
    toast.success("Your marketing prompts are on the way!");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-md rounded-3xl glass border border-white/15 p-8 shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition"
        >
          <X className="size-4" />
        </button>
        <div className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand">
          <Sparkles className="size-5" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-white">
          Wait! Don't Leave Empty-Handed.
        </h3>
        <p className="mt-2 text-sm text-slate-400">Get FREE access to:</p>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
          <li>• AI Marketing Tools</li>
          <li>• Viral Post Generator</li>
          <li>• Website Traffic Strategies</li>
          <li>• Daily Marketing Prompts</li>
        </ul>
        <form onSubmit={submit} className="mt-6 space-y-3" noValidate>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr(null);
            }}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
          />
          {err ? <p className="text-xs text-destructive">{err}</p> : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-brand py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-brand/30 hover:brightness-110 transition"
          >
            Send Me The Prompts
          </button>
        </form>
      </div>
    </div>
  );
}
