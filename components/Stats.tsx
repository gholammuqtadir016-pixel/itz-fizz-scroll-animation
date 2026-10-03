const stats = [
  {
    value: "98%",
    label: "Visual Engagement",
  },
  {
    value: "72%",
    label: "Faster Interaction",
  },
  {
    value: "91%",
    label: "User Retention",
  },
];

export default function Stats() {
  return (
    <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stat-item border-l border-zinc-700 pl-4"
        >
          <div className="text-3xl font-semibold text-white md:text-4xl">
            {stat.value}
          </div>

          <div className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}