import { site } from "@/lib/site";

export function DisclaimerBanner() {
  return (
    <div className="border-b border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-center text-xs font-medium text-cyan-100">
      {site.disclaimer}
    </div>
  );
}
