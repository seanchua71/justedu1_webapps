export const metadata = { title: "Courses — JustEdu" };

const accentClasses = {
  rose: {
    border: "border-t-rose-600",
    chip: "bg-rose-50 text-rose-700",
    link: "text-rose-700 hover:text-rose-600",
  },
  gold: {
    border: "border-t-gold-600",
    chip: "bg-gold-50 text-gold-700",
    link: "text-gold-700 hover:text-gold-600",
  },
  sage: {
    border: "border-t-sage-600",
    chip: "bg-sage-50 text-sage-700",
    link: "text-sage-700 hover:text-sage-600",
  },
} as const;

const courses = [
  {
    subject: "English",
    stage: "Primary",
    detail: "P1 – P6",
    desc: "Reading, composition and oral skills built through warm, structured guidance.",
    accent: "rose",
  },
  {
    subject: "Mathematics",
    stage: "Primary",
    detail: "P1 – P6",
    desc: "Concept-first approach aligned to the MOE syllabus, from whole numbers to fractions.",
    accent: "gold",
  },
  {
    subject: "Science",
    stage: "Primary",
    detail: "P3 – P6",
    desc: "Hands-on, inquiry-based lessons that build a genuine love of discovery.",
    accent: "sage",
  },
  {
    subject: "English",
    stage: "Secondary",
    detail: "Sec 1 – 4 (O-Level)",
    desc: "Exam-focused composition and comprehension coaching for O-Level success.",
    accent: "rose",
  },
  {
    subject: "Mathematics",
    stage: "Secondary",
    detail: "Sec 1 – 4 (E/A-Maths)",
    desc: "Structured practice and exam technique for both E-Maths and A-Maths.",
    accent: "gold",
  },
  {
    subject: "Science",
    stage: "Secondary",
    detail: "Sec 1 – 4 (Combined/Pure)",
    desc: "Physics, Chemistry and Biology foundations taught with real-world context.",
    accent: "sage",
  },
] as const;

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="fade-in-up font-heading text-3xl font-semibold text-brand-600">Courses</h1>
      <p className="fade-in-up delay-1 mt-2 max-w-xl text-brand-900/70">
        Placeholder course listing — pending real syllabus detail, fees and schedules per
        centre. Data model already supports linking each course to specific centres and
        timings via the <code>centre_courses</code> table.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {courses.map((c, i) => (
          <div
            key={i}
            className={`hover-lift fade-in-up delay-${(i % 3) + 1} rounded-xl border-t-4 bg-white p-6 shadow-soft hover:shadow-floating ${accentClasses[c.accent].border}`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${accentClasses[c.accent].chip}`}
            >
              {c.stage}
            </span>
            <h2 className="mt-2 font-heading text-lg font-semibold text-brand-600">
              {c.subject} · {c.detail}
            </h2>
            <p className="mt-2 text-sm text-brand-900/70">{c.desc}</p>
            <a
              href="/contact"
              className={`mt-4 inline-block cursor-pointer text-sm font-medium underline transition-colors duration-200 ${accentClasses[c.accent].link}`}
            >
              Enquire about this course →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
