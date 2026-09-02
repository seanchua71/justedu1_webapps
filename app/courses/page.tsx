export const metadata = { title: "Courses — JustEdu" };

const courses = [
  {
    subject: "English",
    stage: "Primary",
    detail: "P1 – P6",
    desc: "Reading, composition and oral skills built through warm, structured guidance.",
  },
  {
    subject: "Mathematics",
    stage: "Primary",
    detail: "P1 – P6",
    desc: "Concept-first approach aligned to the MOE syllabus, from whole numbers to fractions.",
  },
  {
    subject: "Science",
    stage: "Primary",
    detail: "P3 – P6",
    desc: "Hands-on, inquiry-based lessons that build a genuine love of discovery.",
  },
  {
    subject: "English",
    stage: "Secondary",
    detail: "Sec 1 – 4 (O-Level)",
    desc: "Exam-focused composition and comprehension coaching for O-Level success.",
  },
  {
    subject: "Mathematics",
    stage: "Secondary",
    detail: "Sec 1 – 4 (E/A-Maths)",
    desc: "Structured practice and exam technique for both E-Maths and A-Maths.",
  },
  {
    subject: "Science",
    stage: "Secondary",
    detail: "Sec 1 – 4 (Combined/Pure)",
    desc: "Physics, Chemistry and Biology foundations taught with real-world context.",
  },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-brand-600">Courses</h1>
      <p className="mt-2 max-w-xl text-brand-900/70">
        Placeholder course listing — pending real syllabus detail, fees and schedules per
        centre. Data model already supports linking each course to specific centres and
        timings via the <code>centre_courses</code> table.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {courses.map((c, i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
            <span className="text-xs font-medium uppercase tracking-wide text-brand-500">
              {c.stage}
            </span>
            <h2 className="mt-1 font-heading text-lg font-semibold text-brand-600">
              {c.subject} · {c.detail}
            </h2>
            <p className="mt-2 text-sm text-brand-900/70">{c.desc}</p>
            <a
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-brand-600 underline"
            >
              Enquire about this course →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
