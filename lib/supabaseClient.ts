import { createClient } from "@supabase/supabase-js";

// These are public (anon) values — safe to expose client-side.
// Row Level Security policies on the database restrict what this key can do
// (public read on centres/courses, insert-only on enquiries/registrations).
// Set NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY as Vercel env
// vars for a real deployment; fallbacks below keep this scaffold runnable.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://rqfoaytkwynzxjrdadlh.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZm9heXRrd3luenhqcmRhZGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMDc0MzEsImV4cCI6MjEwMzg4MzQzMX0.SFdAIWHGqce0QcUiEMDYphMEaq_DPkZ_GwonE_SI6_c";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
