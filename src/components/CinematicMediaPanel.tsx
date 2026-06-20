import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type CinematicMediaPanelProps = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
};

function hasPublicAsset(src: string) {
  if (!src.startsWith("/")) {
    return false;
  }

  return existsSync(join(process.cwd(), "public", src.slice(1)));
}

export function CinematicMediaPanel({
  src,
  alt,
  label = "Optional media slot",
  priority = false,
  className = "",
}: CinematicMediaPanelProps) {
  const hasImage = hasPublicAsset(src);

  return (
    <div className={`group relative overflow-hidden rounded-[2rem] glass-panel ${className}`}>
      <div className="absolute inset-0 bg-radial from-cyan-300/20 via-fuchsia-300/10 to-transparent opacity-80" />
      <div className="absolute inset-0 soft-grid opacity-70" />
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
        />
      ) : (
        <>
          <div className="absolute inset-8 rounded-full border border-cyan-200/20" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/10" />
          <div className="animate-sweep absolute left-1/2 top-1/2 h-[1px] w-44 origin-left bg-cyan-200/50" />
        </>
      )}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
          {label}
        </span>
        <span className="h-2 w-2 rounded-full bg-lime-200 shadow-[0_0_18px_rgba(190,242,100,0.8)]" />
      </div>
    </div>
  );
}
