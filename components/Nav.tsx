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
    <header className="sticky top-4 z-20 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-brand-100 bg-white/85 px-4 py-3 shadow-floating backdrop-blur">
        <Link href="/" className="flex cursor-pointer items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="JustEdu — Teaching From Our Hearts"
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <ul className="hidden gap-6 text-sm font-medium text-brand-900 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="cursor-pointer transition-colors hover:text-brand-500"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="cursor-pointer rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift"
        >
          Book Free Trial
        </Link>
      </nav>
    </header>
  );
}
