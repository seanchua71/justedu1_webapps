"use server";

import { supabase } from "@/lib/supabaseClient";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const consent = formData.get("consent_pdpa") === "on";
  if (!consent) {
    return { status: "error", message: "Please consent to data collection to submit." };
  }

  const payload = {
    parent_name: String(formData.get("parent_name") || ""),
    parent_email: String(formData.get("parent_email") || ""),
    parent_phone: String(formData.get("parent_phone") || ""),
    child_name: String(formData.get("child_name") || ""),
    student_level: String(formData.get("student_level") || ""),
    subject_interest: String(formData.get("subject_interest") || ""),
    message: String(formData.get("message") || ""),
    consent_pdpa: true,
    consent_marketing: formData.get("consent_marketing") === "on",
    consent_recorded_at: new Date().toISOString(),
  };

  if (!payload.parent_name || !payload.parent_email || !payload.parent_phone) {
    return { status: "error", message: "Name, email and phone are required." };
  }

  const { error } = await supabase.from("enquiries").insert(payload);

  if (error) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success", message: "Thanks! We'll be in touch to schedule your free trial." };
}
