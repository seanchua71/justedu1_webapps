export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-white/50 py-10 text-sm text-brand-900/70">
      <div className="mx-auto max-w-5xl px-4">
        <p className="font-heading text-brand-600">JustEdu — Teaching From Our Hearts</p>
        <p className="mt-2">
          Placeholder footer. Add real centre contact details and legal links (Terms, PDPA
          Privacy Policy) before launch.
        </p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} JustEdu. All rights reserved.</p>
      </div>
    </footer>
  );
}
