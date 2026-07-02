import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

type Activity = { name: string; action: string };

const activities: Activity[] = [
  { name: "Sarah from Texas", action: "just joined TrafficBoost AI" },
  { name: "Mike from Toronto", action: "generated a Facebook post" },
  { name: "Jennifer from Miami", action: "created a landing page" },
  { name: "David from London", action: "unlocked 100 bonus credits" },
  { name: "Ana from Madrid", action: "generated 12 viral hooks" },
  { name: "Kwame from Lagos", action: "analyzed a competitor site" },
  { name: "Yuki from Osaka", action: "built an email sequence" },
];

export function LiveActivity() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let mounted = true;
    const start = setTimeout(() => mounted && setShow(true), 2500);
    const rotate = setInterval(() => {
      if (!mounted) return;
      setShow(false);
      setTimeout(() => {
        if (!mounted) return;
        setI((v) => (v + 1) % activities.length);
        setShow(true);
      }, 400);
    }, 5500);
    return () => {
      mounted = false;
      clearTimeout(start);
      clearInterval(rotate);
    };
  }, []);

  const a = activities[i];
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <div
        className={`glass flex max-w-[300px] items-center gap-3 rounded-2xl border border-white/10 p-3 pr-4 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
          <Zap className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold leading-tight text-white">{a.name}</p>
          <p className="truncate text-[11px] font-medium text-slate-400">{a.action}</p>
        </div>
      </div>
    </div>
  );
}
