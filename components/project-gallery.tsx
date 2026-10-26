"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Images, ZoomIn } from "lucide-react";

export type ProjectGalleryItem = {
  title: string;
  images: string[];
};

export function ProjectGallery({ project }: { project: ProjectGalleryItem }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  const images = project.images;
  const hasImages = images.length > 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    // Simpan kondisi scroll sebelum modal dibuka.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        setActive((i) => (i + 1) % images.length);
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        setActive((i) => (i - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, images.length]);

  const next = () => setActive((i) => (i + 1) % images.length);

  const previous = () =>
    setActive((i) => (i - 1 + images.length) % images.length);

  if (!hasImages) {
    return (
      <div className="flex h-[210px] items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-zinc-500">
        Belum ada foto proyek
      </div>
    );
  }

  return (
    <>
      {/* Album foto bertumpuk */}
      <button
        type="button"
        onClick={() => {
          setActive(0);
          setOpen(true);
        }}
        className="group/gallery relative block w-full rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        aria-label={`Buka album ${project.title}`}
      >
        <div className="relative mx-auto h-[210px] w-full max-w-[360px]">
          {images
            .slice(0, 3)
            .reverse()
            .map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="absolute inset-x-8 top-3 h-[174px] overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-xl transition-transform duration-300 group-hover/gallery:scale-[1.02]"
                style={{
                  transform: `translateX(${(i - 1) * 15}px) translateY(${(1 - i) * 7}px) rotate(${(i - 1) * 5}deg) scale(${1 - Math.abs(i - 1) * 0.045})`,
                  zIndex: i + 1,
                }}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}

          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-zinc-950/10 opacity-0 transition group-hover/gallery:bg-zinc-950/35 group-hover/gallery:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 px-4 py-2.5 text-sm font-medium text-white shadow-xl">
              <ZoomIn size={16} />
              Buka album
            </span>
          </div>

          <span className="absolute bottom-2 right-2 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-950/90 px-3 py-1.5 text-xs text-white">
            <Images size={13} />
            {images.length} foto
          </span>
        </div>
      </button>

      {/* Modal dirender di document.body melalui Portal */}
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Galeri ${project.title}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <div className="relative flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    Foto {active + 1} dari {images.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Tutup galeri"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Gambar utama */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/30 p-3 sm:p-6">
                <img
                  key={images[active]}
                  src={images[active]}
                  alt={`${project.title} — foto ${active + 1}`}
                  className="block max-h-[55dvh] max-w-full rounded-xl object-contain sm:max-h-[62dvh]"
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Foto sebelumnya"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-900/95 text-white shadow-lg transition hover:bg-violet-500 sm:left-6 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Foto berikutnya"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-900/95 text-white shadow-lg transition hover:bg-violet-500 sm:right-6 sm:h-12 sm:w-12"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail */}
              <div className="shrink-0 border-t border-white/10 px-3 py-3 sm:px-5">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((src, i) => (
                    <button
                      key={`${src}-thumb-${i}`}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Pilih foto ${i + 1}`}
                      aria-current={active === i ? "true" : undefined}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                        active === i
                          ? "border-violet-300 opacity-100"
                          : "border-transparent opacity-55 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
