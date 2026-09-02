export const metadata = { title: "FAQ — JustEdu" };

const faqs = [
  {
    q: "How does the free trial class work?",
    a: "Submit an enquiry with your child's level and subject of interest. Our team will contact you to schedule a trial at a convenient centre and time.",
  },
  {
    q: "What are your fees?",
    a: "Fees vary by subject, level and centre. Our team will share the relevant fee schedule when confirming your trial or registration.",
  },
  {
    q: "Who are the tutors?",
    a: "Placeholder — add tutor qualification and vetting information here.",
  },
  {
    q: "How is my data used?",
    a: "Information submitted through our enquiry and registration forms is used solely to contact you about JustEdu programmes, in accordance with Singapore's Personal Data Protection Act (PDPA). See our Privacy Policy (placeholder link) for details.",
  },
  {
    q: "Can I reschedule or cancel a trial?",
    a: "Placeholder — add rescheduling/cancellation policy here.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-brand-600">
        Frequently Asked Questions
      </h1>
      <div className="mt-10 space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-heading font-semibold text-brand-600">{f.q}</h2>
            <p className="mt-2 text-sm text-brand-900/70">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
