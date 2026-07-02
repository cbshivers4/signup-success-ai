import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  email: z.string().trim().email("Enter a valid email").max(255),
  businessType: z.string().max(60).optional(),
  website: z
    .string()
    .trim()
    .max(255)
    .optional()
    .refine(
      (v) => !v || /^https?:\/\/.+\..+/.test(v),
      "Enter a valid URL starting with http(s)://",
    ),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", email: "", businessType: "", website: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: wire to Lovable Cloud (persist lead + send welcome email)
    await new Promise((r) => setTimeout(r, 600));
    toast.success(`You're in, ${data.firstName}!`, {
      description: "Check your inbox for instant access.",
    });
    reset();
  };

  return (
    <div id="signup" className="relative">
      <div className="absolute -top-3 -right-3 z-10 rounded-full bg-accent-cyan px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-slate-900 shadow-lg">
        Limited Free Slots
      </div>
      <div className="glass rounded-3xl border border-white/10 p-7 shadow-2xl shadow-black/40">
        <h3 className="text-2xl font-bold text-white">Get Instant Access</h3>
        <p className="mt-1 text-sm text-slate-400">
          Join 12,000+ creators scaling with AI. No credit card required.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
          <Field label="First Name" error={errors.firstName?.message}>
            <input
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 transition"
              {...register("firstName")}
            />
          </Field>
          <Field label="Email Address" error={errors.email?.message}>
            <input
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 transition"
              {...register("email")}
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Business Type" error={errors.businessType?.message}>
              <select
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 transition"
                {...register("businessType")}
              >
                <option value="" className="bg-background">Select...</option>
                <option className="bg-background">Affiliate</option>
                <option className="bg-background">Coach</option>
                <option className="bg-background">Creator</option>
                <option className="bg-background">E-commerce</option>
                <option className="bg-background">Small Business</option>
              </select>
            </Field>
            <Field label="Website (opt.)" error={errors.website?.message}>
              <input
                type="url"
                placeholder="https://"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 transition"
                {...register("website")}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-brand/30 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting ? "Securing your spot..." : "Get Instant Access FREE"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#top"
            className="block text-center text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Or watch the demo first →
          </a>
          <p className="text-center text-[10px] text-slate-500">
            No credit card required · 256-bit encrypted
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 ml-1 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1 ml-1 block text-[11px] font-medium text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}
