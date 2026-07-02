import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Sparkles, LogOut } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <main className="min-h-screen bg-mesh px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30">
              <Sparkles className="size-4" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              TRAFFIC<span className="text-brand">BOOST</span> AI
            </span>
          </div>
          <Button variant="secondary" onClick={handleLogout}>
            <LogOut className="mr-2 size-4" />
            Sign out
          </Button>
        </header>

        <section className="mt-16 glass rounded-3xl p-10 shadow-2xl shadow-black/40">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            You're in
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
            Welcome, {user.email}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This is your private dashboard. Your growth tools will appear here as
            we plug them in — traffic reports, lead lists, AI content briefs and
            referral analytics.
          </p>
        </section>
      </div>
    </main>
  );
}
