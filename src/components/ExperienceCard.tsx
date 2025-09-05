type Props = {
  company: string;
  role: string;
  period: string;
  domain?: string;
  bullets: string[];
};

export default function ExperienceCard({ company, role, period, domain, bullets }: Props) {
  return (
    <div className="card">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-neutral-900">{company}</h3>
        <span className="text-neutral-400">•</span>
        <span className="text-sm text-neutral-600">{period}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-neutral-800">{role}</div>
      {domain && <div className="text-xs text-neutral-500">{domain}</div>}

      <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
