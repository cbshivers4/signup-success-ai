import { Users, Crown, Infinity as InfinityIcon } from "lucide-react";

const tiers = [
  { count: 3, icon: Users, label: "Friends", reward: "100 Bonus AI Credits" },
  { count: 10, icon: Crown, label: "Friends", reward: "30 Days Pro Features Free", highlight: true },
  { count: 25, icon: InfinityIcon, label: "Friends", reward: "Lifetime Premium Templates" },
];

export function Referral() {
  return (
    <section id="referral" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-cyan">
          Built-in Growth Engine
        </div>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Grow with Your Network
        </h2>
        <p className="mt-4 text-slate-400">
          Every signup gets a unique referral link. Invite friends, unlock rewards, and
          track your progress inside the dashboard.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.count}
                className={`glass rounded-2xl p-6 text-left transition-all ${
                  t.highlight
                    ? "border-brand/50 ring-2 ring-brand/30 shadow-xl shadow-brand/20"
                    : "border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-white">{t.count}</span>
                  <div className="grid size-10 place-items-center rounded-xl bg-brand/15 text-brand">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  {t.label}
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{t.reward}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>Sample referral progress</span>
            <span className="text-white">1 / 3</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-accent-cyan"
              style={{ width: "33%" }}
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Invite 2 more friends to unlock your first reward tier.
          </p>
        </div>
      </div>
    </section>
  );
}
