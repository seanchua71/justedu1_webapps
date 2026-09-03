import TrialForm from "@/components/TrialForm";

export const metadata = { title: "Contact | JustEdu" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="fade-in-up font-heading text-3xl font-semibold text-brand-600">
        Contact & Enquire
      </h1>
      <p className="fade-in-up delay-1 mt-2 text-brand-900/70">
        Reach out for a free trial class, a course enquiry, or general questions using the form
        below. Direct phone, WhatsApp and email contacts are placeholders, pending real centre
        details.
      </p>
      <div className="fade-in-up delay-2 mt-8">
        <TrialForm />
      </div>
    </div>
  );
}
