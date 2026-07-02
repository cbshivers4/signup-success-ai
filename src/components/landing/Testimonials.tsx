import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "TrafficBoost AI literally halved our content creation costs while doubling our click-through rate in just 14 days. Best marketing decision this year.",
    name: "Sarah Jenkins",
    role: "Founder, Bloom & Co",
    initials: "SJ",
  },
  {
    quote:
      "I was skeptical about AI content, but the landing page builder is incredible. Conversion rate jumped from 3% to 11% overnight.",
    name: "David Chen",
    role: "CMO, TechFlow",
    initials: "DC",
  },
  {
    quote:
      "Finally, an AI tool that understands marketing psychology. It doesn't just write — it sells. My affiliate revenue is up 4x.",
    name: "Elena Rodriguez",
    role: "Affiliate Marketer",
    initials: "ER",
  },
  {
    quote:
      "The QR + landing page combo turned our print flyers into an actual lead engine. We captured more emails in a month than the previous year.",
    name: "Marcus Bell",
    role: "Owner, Bell Coffee Co.",
    initials: "MB",
  },
];

export function Testimonials() {
  const autoplay = Autoplay({ delay: 4500, stopOnInteraction: false });
  useEffect(() => () => autoplay.stop(), [autoplay]);

  return (
    <section className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by <span className="text-gradient-brand">Growth Leaders</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Real stories from operators using TrafficBoost AI every day.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay]}
          className="mt-14"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <div className="h-full glass rounded-3xl p-8 border border-white/10">
                  <div className="flex gap-0.5 text-accent-cyan">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg font-medium leading-relaxed text-white">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="grid size-11 place-items-center rounded-full bg-gradient-to-tr from-brand to-accent-cyan text-sm font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
            <CarouselNext className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
