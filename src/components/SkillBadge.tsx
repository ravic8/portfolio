export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {label}
    </span>
  );
}
