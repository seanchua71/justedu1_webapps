import TrialForm from "@/components/TrialForm";

export const metadata = { title: "Contact — JustEdu" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-brand-600">Contact & Enquire</h1>
      <p className="mt-2 text-brand-900/70">
        Reach out for a free trial class, a course enquiry, or general questions. Placeholder
        phone/WhatsApp/email — to be replaced with real centre contact details.
      </p>
      <div className="mt-8">
        <TrialForm />
      </div>
    </div>
  );
}
