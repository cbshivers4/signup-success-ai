import {
  MessageSquare,
  Flame,
  LayoutTemplate,
  Mail,
  FileText,
  Video,
  QrCode,
  LineChart,
  IdCard,
  Gift,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tone: string;
};

const features: Feature[] = [
  { icon: MessageSquare, title: "Social Post Generator", desc: "30 days of scroll-stopping content in under 5 minutes.", tone: "text-brand" },
  { icon: Flame, title: "Viral Hooks", desc: "AI-engineered headlines that command instant attention.", tone: "text-accent-cyan" },
  { icon: LayoutTemplate, title: "Landing Page Builder", desc: "Launch high-converting offer pages without touching code.", tone: "text-brand" },
  { icon: Mail, title: "Email Campaigns", desc: "Nurture sequences that land in the primary inbox and sell.", tone: "text-accent-cyan" },
  { icon: FileText, title: "Blog Posts", desc: "SEO-friendly long-form articles that actually rank.", tone: "text-brand" },
  { icon: Video, title: "Video Scripts", desc: "Retention-optimized scripts for TikTok, Reels, and YouTube.", tone: "text-accent-cyan" },
  { icon: QrCode, title: "QR Code Generator", desc: "Bridge physical marketing to trackable digital leads.", tone: "text-brand" },
  { icon: LineChart, title: "Website Analyzer", desc: "Instant SEO and conversion audits for any URL.", tone: "text-accent-cyan" },
  { icon: IdCard, title: "AI Business Cards", desc: "Shareable digital identities for the modern networker.", tone: "text-brand" },
  { icon: Gift, title: "Referral Rewards", desc: "Growth loops built into every signup you generate.", tone: "text-accent-cyan" },
];

export function Benefits() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Everything You Need to <span className="text-gradient-brand">Dominate</span>
          </h2>
          <p className="mt-4 text-slate-400">
            A complete AI marketing suite designed for aggressive, sustainable growth —
            no more stitching together five different tools.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-white/5 border border-white/10 mb-5 transition-colors group-hover:bg-brand/15">
                  <Icon className={`size-5 ${f.tone}`} strokeWidth={2.2} />
                </div>
                <h3 className="text-sm font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
