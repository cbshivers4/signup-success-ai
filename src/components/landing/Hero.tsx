import { VideoPlayer } from "./VideoPlayer";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <header id="top" className="relative bg-mesh px-6 pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            AI-Powered Traffic Generation
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Get More Website Traffic, Leads &amp; Sales with{" "}
            <span className="text-gradient-brand">AI—Starting Today!</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Discover the AI-powered marketing platform that helps entrepreneurs,
            affiliates, creators, coaches, and small business owners create
            high-converting content, attract more visitors, and grow their business
            in minutes.
          </p>
          <VideoPlayer />
        </div>

        <div className="lg:col-span-5">
          <LeadForm />
        </div>
      </div>
    </header>
  );
}
