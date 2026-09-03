export const metadata = { title: "Locations | JustEdu" };

const centres = [
  {
    name: "JustEdu Tampines (placeholder)",
    address: "Address to be confirmed",
    hours: "Mon-Fri 2pm-8pm, Sat 9am-5pm (placeholder)",
  },
];

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="fade-in-up font-heading text-3xl font-semibold text-brand-600">Locations</h1>
      <p className="fade-in-up delay-1 mt-2 max-w-xl text-brand-900/70">
        Placeholder listing, real centre addresses, maps and hours are pending. The{" "}
        <code>centres</code> table in Supabase is ready to hold this data once confirmed.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {centres.map((c, i) => (
          <div
            key={c.name}
            className={`hover-lift fade-in-up delay-${i + 2} rounded-xl border-t-4 border-t-brand-500 bg-white p-6 shadow-soft hover:shadow-floating`}
          >
            <h2 className="font-heading text-lg font-semibold text-brand-600">{c.name}</h2>
            <p className="mt-2 text-sm text-brand-900/70">{c.address}</p>
            <p className="mt-1 text-sm text-brand-900/70">{c.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
