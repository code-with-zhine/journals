const stats = [
  { id: 1, name: "Published Journals", value: "144" },
  { id: 2, name: "Unpublished Jounals", value: "9" },
  { id: 3, name: "Registered Authors", value: "550" },
  { id: 4, name: "Downloaded Journals", value: "50" },
];

export default function Stats() {
  return (
    <div className="min-h-screen bg-white py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 border-2 p-4 rounded-lg"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
