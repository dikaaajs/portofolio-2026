"use client";
import { CalendarDays, ExternalLink, X } from "lucide-react";
import { useState } from "react";

type Certificate = {
  title: string;
  organizer: string;
  description: string;
  date: string;
  image: string;
  certificateUrl: string;
  topics: string[];
};

export function CertificateCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {/* Gambar sertifikat */}
      <img
        src={cert.image}
        alt={`Sertifikat ${cert.title}`}
        loading="lazy"
        className={`h-full w-full object-contain p-2 transition-all duration-500 ${
          showInfo ? "scale-105 blur-[2px]" : "scale-100"
        }`}
      />

      {/* Tombol mobile */}
      <button
        type="button"
        onClick={() => setShowInfo((prev) => !prev)}
        aria-label={showInfo ? "Tutup informasi" : "Lihat informasi sertifikat"}
        aria-expanded={showInfo}
        className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-violet-500"
      >
        {showInfo ? <X size={15} /> : <span className="text-sm">i</span>}
      </button>

      {/* Informasi overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-black/30 p-3 transition-all duration-300 sm:p-4 ${
          showInfo
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0"
        }`}
      >
        <span className="mb-2 text-[10px] font-medium tracking-widest text-violet-300">
          CERT. {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white sm:text-base">
          {cert.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-xs text-violet-200">
          {cert.organizer}
        </p>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">
          {cert.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-400">
          <CalendarDays size={12} />
          {cert.date}
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {cert.topics.slice(0, 2).map((topic) => (
            <span
              key={topic}
              className="rounded bg-white/10 px-2 py-1 text-[10px] text-zinc-300"
            >
              {topic}
            </span>
          ))}
        </div>

        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-violet-300 transition hover:text-white"
        >
          Lihat sertifikat
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}
