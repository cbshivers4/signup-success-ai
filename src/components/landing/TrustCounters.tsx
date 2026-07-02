import { useCountUp } from "@/hooks/use-count-up";

type Stat = { label: string; value: number; suffix?: string; format?: "k" | "m" | "plain" };

const stats: Stat[] = [
  { label: "Marketing Campaigns", value: 428000, format: "k", suffix: "+" },
  { label: "AI Content Generated", value: 12400000, format: "m", suffix: "+" },
  { label: "Leads Generated", value: 843000, format: "k", suffix: "+" },
  { label: "Happy Users", value: 27500, format: "k", suffix: "+" },
];

function formatValue(v: number, fmt?: Stat["format"]) {
  if (fmt === "m") return `${(v / 1_000_000).toFixed(1)}M`;
  if (fmt === "k") return `${Math.floor(v / 1000)}K`;
  return v.toLocaleString();
}

function Counter({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value, 1800);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        {formatValue(value, stat.format)}
        <span className="text-brand">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        {stat.label}
      </div>
    </div>
  );
}

export function TrustCounters() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
