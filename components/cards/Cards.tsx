export default function Cards() {
  const items = [
    { title: 'Task Management', desc: 'Organize your work efficiently.' },
    { title: 'Scheduling', desc: 'Never miss important events.' },
    { title: 'Analytics', desc: 'Track your progress easily.' },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
