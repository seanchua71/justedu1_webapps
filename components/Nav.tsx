"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-20 px-4">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-brand-100 bg-white/85 shadow-floating backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="JustEdu logo" className="h-10 w-auto sm:h-12" />
          </Link>
          <ul className="hidden gap-6 text-sm font-medium text-brand-900 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-brand-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift"
            >
              Book Free Trial
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand-600 transition-colors hover:bg-brand-100 sm:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M4 4l12 12M16 4L4 16" />
                ) : (
                  <path d="M2.5 5h15M2.5 10h15M2.5 15h15" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <ul
            id="mobile-menu"
            className="flex flex-col gap-1 border-t border-brand-100 px-4 py-3 text-sm font-medium text-brand-900 sm:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 transition-colors hover:bg-brand-50 hover:text-brand-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
