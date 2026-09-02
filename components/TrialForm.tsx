"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitEnquiry, type EnquiryState } from "@/app/actions/enquiry";

const initialState: EnquiryState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-brand-500 px-6 py-2 font-medium text-white transition-transform hover:scale-105 disabled:opacity-60"
    >
      {pending ? "Submitting…" : "Book My Free Trial"}
    </button>
  );
}

export default function TrialForm() {
  const [state, formAction] = useFormState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl bg-brand-100 p-6 text-brand-900 fade-in-up">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="parent_name"
          required
          placeholder="Parent/guardian name"
          className="rounded-md border border-brand-100 px-3 py-2"
        />
        <input
          name="parent_phone"
          required
          placeholder="Phone / WhatsApp"
          className="rounded-md border border-brand-100 px-3 py-2"
        />
        <input
          name="parent_email"
          type="email"
          required
          placeholder="Email"
          className="rounded-md border border-brand-100 px-3 py-2"
        />
        <input
          name="child_name"
          placeholder="Child's name"
          className="rounded-md border border-brand-100 px-3 py-2"
        />
        <select
          name="student_level"
          className="rounded-md border border-brand-100 px-3 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Student level
          </option>
          <option>Primary 1-3</option>
          <option>Primary 4-6</option>
          <option>Secondary 1-2</option>
          <option>Secondary 3-4 (O-Level)</option>
        </select>
        <select
          name="subject_interest"
          className="rounded-md border border-brand-100 px-3 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Subject of interest
          </option>
          <option>English</option>
          <option>Mathematics</option>
          <option>Science</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Anything else we should know? (optional)"
        className="w-full rounded-md border border-brand-100 px-3 py-2"
        rows={3}
      />
      <label className="flex items-start gap-2 text-sm text-brand-900/80">
        <input type="checkbox" name="consent_pdpa" required className="mt-1" />
        <span>
          I consent to JustEdu collecting and using the information above to contact me about
          this enquiry, in accordance with the PDPA. Required.
        </span>
      </label>
      <label className="flex items-start gap-2 text-sm text-brand-900/80">
        <input type="checkbox" name="consent_marketing" className="mt-1" />
        <span>Send me occasional updates about JustEdu programmes (optional).</span>
      </label>
      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}
      <SubmitButton />
    </form>
  );
}
