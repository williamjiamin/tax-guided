import type { Source } from "@/lib/expansion/types";

interface Props {
  sources: Source[];
}

export function SourceList({ sources }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">Primary sources</h2>
      <ul className="mt-3 space-y-3">
        {sources.map((source) => (
          <li key={`${source.label}-${source.url}`} className="text-sm text-gray-600">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0a1628] hover:text-[#c9a84c]"
            >
              {source.label}
            </a>
            {source.verifiedAt ? (
              <span className="ml-2 text-gray-400">Verified {source.verifiedAt}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
