import Link from "next/link";
import TrialForm from "@/components/TrialForm";

const subjects = [
  { name: "English", blurb: "Comprehension, composition and oral confidence." },
  { name: "Mathematics", blurb: "Concept mastery from arithmetic to A-Maths." },
  { name: "Science", blurb: "Inquiry-based learning for Primary and Secondary Science." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="fade-in-up py-20 text-center">
        <h1 className="font-heading text-4xl font-semibold text-brand-600 sm:text-5xl">
          Teaching From Our Hearts
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-900/80">
          JustEdu is a Singapore tuition centre for Primary and Secondary English, Mathematics
          and Science — warm, dedicated teaching that helps every child thrive.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#trial"
            className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            Book a Free Trial Class
          </Link>
          <Link
            href="/courses"
            className="rounded-full border border-brand-500 px-6 py-3 font-medium text-brand-600 transition-colors hover:bg-brand-100"
          >
            View Courses
          </Link>
        </div>
      </section>

      <section className="grid gap-6 py-12 sm:grid-cols-3">
        {subjects.map((s) => (
          <div key={s.name} className="rounded-xl bg-white p-6 shadow-sm fade-in-up">
            <h2 className="font-heading text-lg font-semibold text-brand-600">{s.name}</h2>
            <p className="mt-2 text-sm text-brand-900/70">{s.blurb}</p>
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
