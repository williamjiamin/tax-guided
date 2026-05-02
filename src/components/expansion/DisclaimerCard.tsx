import { EXPANSION_DISCLAIMER } from "@/lib/expansion/constants";

export function DisclaimerCard() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950">
      <p className="font-semibold">Important disclaimer</p>
      <p className="mt-1 leading-6">{EXPANSION_DISCLAIMER}</p>
    </div>
  );
}
