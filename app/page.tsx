import Image from "next/image";
import Link from "next/link";
import { BookOpenText, Calculator, Flask } from "@phosphor-icons/react/dist/ssr";
import TrialForm from "@/components/TrialForm";

const subjects = [
  {
    name: "English",
    blurb: "Comprehension, composition and oral confidence.",
    accent: "rose",
    icon: BookOpenText,
  },
  {
    name: "Mathematics",
    blurb: "Concept mastery from arithmetic to A-Maths.",
    accent: "gold",
    icon: Calculator,
  },
  {
    name: "Science",
    blurb: "Inquiry-based learning for Primary and Secondary Science.",
    accent: "sage",
    icon: Flask,
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
      <section className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <h1 className="fade-in-up font-heading text-4xl font-bold leading-tight text-brand-600 sm:text-5xl">
            Teaching From Our Hearts
          </h1>
          <p className="fade-in-up delay-1 mx-auto mt-4 max-w-md text-brand-900/80 lg:mx-0">
            JustEdu is a Singapore tuition centre for Primary and Secondary English, Mathematics
            and Science. We teach with warmth and dedication, helping every child thrive.
          </p>
          <div className="fade-in-up delay-2 mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="#trial"
              className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift"
            >
              Book a Free Trial Class
            </Link>
            <Link
              href="/courses"
              className="rounded-full border border-brand-500 px-6 py-3 font-medium text-brand-600 transition-colors duration-200 hover:bg-brand-100"
            >
              View Courses
            </Link>
          </div>
        </div>

        <div className="fade-in-up delay-2 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-50 via-gold-50 to-sage-50 opacity-80 blur-2xl"
          />
          {/*
            TODO: replace with a real photo of a JustEdu classroom, tutor or
            student before launch. Placeholder sourced from picsum.photos.
          */}
          <Image
            src="https://picsum.photos/seed/justedu-classroom-warm/800/900"
            alt="A tutor guiding a student through a lesson"
            width={800}
            height={900}
            priority
            className="aspect-[4/5] w-full rounded-3xl border border-brand-100 object-cover shadow-floating"
          />
        </div>
      </section>

      <section className="grid gap-6 py-12 sm:grid-cols-3">
        {subjects.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className={`hover-lift fade-in-up delay-${i + 1} rounded-xl border-t-4 bg-white p-6 shadow-soft hover:shadow-floating ${accentClasses[s.accent].border}`}
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${accentClasses[s.accent].chip}`}
              >
                <Icon size={20} weight="bold" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading font-semibold text-brand-900">{s.name}</h2>
              <p className="mt-2 text-sm text-brand-900/70">{s.blurb}</p>
            </div>
          );
        })}
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
