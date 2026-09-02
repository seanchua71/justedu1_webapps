import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 py-12 text-sm text-brand-50/80">
      <div className="mx-auto max-w-5xl px-4">
        <p className="font-heading text-lg text-white">JustEdu — Teaching From Our Hearts</p>
        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2 sm:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="cursor-pointer text-brand-50/90 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 max-w-xl text-brand-50/70">
          Placeholder footer. Add real centre contact details and legal links (Terms, PDPA
          Privacy Policy) before launch.
        </p>
        <p className="mt-4 text-xs text-brand-50/60">
          © {new Date().getFullYear()} JustEdu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
