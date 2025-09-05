type Item = {
  date: string;
  title: string;
  description: string;
  tags?: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s-2 border-neutral-200">
      {items.map((t, idx) => (
        <li key={idx} className="mb-8 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-neutral-300 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-400" />
          </span>
          <div className="card p-4">
            <div className="text-xs uppercase tracking-wide text-neutral-500">{t.date}</div>
            <h4 className="mt-1 text-lg font-semibold text-neutral-900">{t.title}</h4>
            <p className="mt-2 text-neutral-700">{t.description}</p>
            {!!t.tags?.length && (
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-600 border border-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
