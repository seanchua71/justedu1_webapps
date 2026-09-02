import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand-100 bg-brand-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-xl font-semibold text-brand-600">
          JustEdu
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-brand-500 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Book Free Trial
        </Link>
      </nav>
    </header>
  );
}
