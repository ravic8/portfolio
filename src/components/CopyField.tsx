import React from "react";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium text-neutral-800">{label}:</span>
      <code className="rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-700 border border-neutral-200">
        {value}
      </code>
      <button
        onClick={onCopy}
        className="text-xs rounded border border-neutral-200 bg-white px-2 py-1 hover:bg-neutral-50"
        aria-label={`Copy ${label}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
