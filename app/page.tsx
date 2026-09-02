import Link from "next/link";
import TrialForm from "@/components/TrialForm";

const subjects = [
  {
    name: "English",
    blurb: "Comprehension, composition and oral confidence.",
    accent: "rose",
  },
  {
    name: "Mathematics",
    blurb: "Concept mastery from arithmetic to A-Maths.",
    accent: "gold",
  },
  {
    name: "Science",
    blurb: "Inquiry-based learning for Primary and Secondary Science.",
    accent: "sage",
  },
] as const;

const accentClasses = {
  rose: {
    border: "border-t-rose-600",
    chip: "bg-rose-50 text-rose-700",
  },
  gold: {
    border: "border-t-gold-600",
    chip: "bg-gold-50 text-gold-700",
  },
  sage: {
    border: "border-t-sage-600",
    chip: "bg-sage-50 text-sage-700",
  },
} as const;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="relative overflow-hidden py-20 text-center">
        {/* Decorative pastel blobs — purely visual, aria-hidden */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-72 w-72 -translate-x-[140%] rounded-full bg-rose-50 opacity-70 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-72 translate-x-[40%] rounded-full bg-gold-50 opacity-70 blur-3xl animate-float"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 h-72 w-72 -translate-x-[10%] rounded-full bg-sage-50 opacity-60 blur-3xl animate-float-slow"
        />

        <h1 className="fade-in-up font-heading text-4xl font-semibold text-brand-600 sm:text-5xl">
          Teaching From Our Hearts
        </h1>
        <p className="fade-in-up delay-1 mx-auto mt-4 max-w-xl text-brand-900/80">
          JustEdu is a Singapore tuition centre for Primary and Secondary English, Mathematics
          and Science — warm, dedicated teaching that helps every child thrive.
        </p>
        <div className="fade-in-up delay-2 mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#trial"
            className="cursor-pointer rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift"
          >
            Book a Free Trial Class
          </Link>
          <Link
            href="/courses"
            className="cursor-pointer rounded-full border border-brand-500 px-6 py-3 font-medium text-brand-600 transition-colors duration-200 hover:bg-brand-100"
          >
            View Courses
          </Link>
        </div>
      </section>

      <section className="grid gap-6 py-12 sm:grid-cols-3">
        {subjects.map((s, i) => (
          <div
            key={s.name}
            className={`hover-lift fade-in-up delay-${i + 1} rounded-xl border-t-4 bg-white p-6 shadow-soft hover:shadow-floating ${accentClasses[s.accent].border}`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${accentClasses[s.accent].chip}`}
            >
              {s.name}
            </span>
            <p className="mt-3 text-sm text-brand-900/70">{s.blurb}</p>
          </div>
        ))}
      </section>

      <section id="trial" className="py-16">
        <h2 className="text-center font-heading text-2xl font-semibold text-brand-600">
          Book Your Free Trial Class
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-brand-900/70">
          Tell us a little about your child and we&apos;ll match you with the right class.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <TrialForm />
        </div>
      </section>
    </div>
  );
}
