import Link from "next/link";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = { title: "Locations | JustEdu" };

const centres = [
  {
    name: "JustEdu Learning Centre (Bukit Gombak)",
    address: "373 Bukit Batok Street 31, #02-246, Singapore 650373",
    phone: "6567 0600",
    phoneHref: "tel:+6565670600",
    whatsapp: "8546 6318",
    whatsappHref: "https://wa.me/6585466318",
    email: "bukitgombak@justedu.com.sg",
    mapQuery: "JustEdu Learning Centre Bukit Gombak, 373 Bukit Batok Street 31, Singapore 650373",
    schedule: [
      { day: "Mon", hours: "Closed" },
      { day: "Tue", hours: "3pm to 9pm" },
      { day: "Wed", hours: "Closed" },
      { day: "Thu", hours: "3pm to 9pm" },
      { day: "Fri", hours: "3pm to 9pm" },
      { day: "Sat", hours: "9.30am to 5pm" },
      { day: "Sun", hours: "9.30am to 5pm" },
    ],
  },
] as const;

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="fade-in-up font-heading text-3xl font-semibold text-brand-600">Locations</h1>
      <p className="fade-in-up delay-1 mt-2 max-w-xl text-brand-900/70">
        Find your nearest JustEdu centre, get in touch, and see when we are open. More centres
        will be added here as they come on board.
      </p>

      <div className="mt-10 space-y-8">
        {centres.map((c, i) => (
          <div
            key={c.name}
            className={`hover-lift fade-in-up delay-${i + 2} grid gap-0 overflow-hidden rounded-xl border-t-4 border-t-brand-500 bg-white shadow-soft hover:shadow-floating md:grid-cols-2`}
          >
            <iframe
              title={`Map to ${c.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`}
              loading="lazy"
              className="h-64 w-full border-0 md:h-full md:min-h-[22rem]"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-brand-600">{c.name}</h2>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-900/80">
                <a
                  href={c.phoneHref}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-brand-600"
                >
                  <Phone size={18} weight="bold" aria-hidden="true" />
                  {c.phone}
                </a>
                <a
                  href={c.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-brand-600"
                >
                  <WhatsappLogo size={18} weight="bold" aria-hidden="true" />
                  {c.whatsapp}
                </a>
              </div>

              <a
                href={`mailto:${c.email}`}
                className="mt-3 flex items-center gap-2 text-sm text-brand-900/80 transition-colors duration-200 hover:text-brand-600"
              >
                <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                {c.email}
              </a>

              <p className="mt-3 flex items-start gap-2 text-sm text-brand-900/80">
                <MapPin size={18} weight="bold" className="mt-0.5 shrink-0" aria-hidden="true" />
                {c.address}
              </p>

              <Link
                href="/courses"
                className="mt-5 inline-block rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lift"
              >
                View Class Schedule
              </Link>

              <dl className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {c.schedule.map((s) => (
                  <div
                    key={s.day}
                    className={`rounded-lg px-2 py-2 text-center ${
                      s.hours === "Closed"
                        ? "bg-brand-900/5 text-brand-900/40"
                        : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide">{s.day}</dt>
                    <dd className="mt-1 text-[0.7rem] leading-tight">{s.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
