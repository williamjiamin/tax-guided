"use client";

import { useT } from "./locale-context";

interface DualTextProps {
  tKey: string;
  vars?: Record<string, string | number>;
  className?: string;
}

/**
 * Renders dual-language text for the filer:
 * - English (IRS original) in small gray text on top
 * - Translated text below in normal size
 * - When locale is "en", renders just the English text normally
 */
export function DualText({ tKey, vars, className }: DualTextProps) {
  const { tDual, locale } = useT();

  if (locale === "en") {
    const { original } = tDual(tKey, vars);
    return <span className={className}>{original}</span>;
  }

  const { original, translated } = tDual(tKey, vars);

  // If they're the same (no translation available), just render once
  if (original === translated) {
    return <span className={className}>{original}</span>;
  }

  return (
    <span className={className}>
      <span className="block text-gray-800">{translated}</span>
      <span className="block text-[11px] text-gray-400 mt-0.5">{original}</span>
    </span>
  );
}
