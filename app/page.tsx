"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Send,
  Sparkles,
  Linkedin,
  Award,
  CalendarDays,
  Smartphone,
  Globe,
  Layers3,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/project-gallery";
import { CertificateCard } from "@/components/certificate";
import { useState } from "react";

const skills = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  { title: "Mobile", items: ["Flutter", "Dart"] },
  {
    title: "Integrasi & Backend",
    items: ["REST API", "Node.js", "Express.js", "MySQL", "MongoDB"],
  },
  { title: "Tools", items: ["Git", "GitHub", "Figma"] },
];

const projects = [
  {
    number: "01",
    title: "Ecom",
    type: "WEB APPLICATION",
    description:
      "WebApp untuk UMKM bisa membuat websitenya sendiri. Sudah tersedia landing page dan admin page. Jadi user bisa mengelola data produknya tanpa menyentuh kodenya lagi",
    stack: ["Next.js", "Tailwind CSS", "REST API"],
    icon: MonitorSmartphone,
    images: ["/projects/ecom-1.png", "/projects/ecom-2.png"],
    accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
    github: "https://github.com/dikaaajs/ecom",
    demo: "https://ecom-three-sand.vercel.app/",
    note: "Project experience · Self Improvement",
  },
  {
    number: "02",
    title: "Student Companion App",
    type: "MOBILE APPLICATION",
    description:
      "Aplikasi mobile untuk membantu orang tua, guru, dan siswa memantau perkembangan akademik serta aktivitas siswa.",
    stack: ["Flutter", "Dart", "REST API"],
    icon: Smartphone,
    images: [
      "/projects/tanya-1.jpeg",
      "/projects/tanya-2.png",
      "/projects/tanya-3.png",
    ],
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    github: "",
    demo: "",
    note: "Project experience · SocketSpace Indonesia",
  },
  {
    number: "03",
    title: "Attendance Website",
    type: "WEB APPLICATION",
    description:
      "Aplikasi kehadiran berbasis web untuk suatu lembaga. Dibangun dengan UI yang modern dan minimalis",
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS"],
    icon: Layers3,
    images: [
      "/projects/absensi-1.png",
      "/projects/absensi-2.jpg",
      "/projects/absensi-3.png",
    ],
    accent: "from-violet-500/20 via-yellow-500/10 to-transparent",
    github: "",
    demo: "",
    note: "Freelance development",
  },
  {
    number: "04",
    title: "Form Event",
    type: "WEB APPLICATION",
    description:
      "Website pendaftaran suatu event atau acara. Diintegrasi dengan google sheet sehingga client bisa mengolah datanya secara mudah",
    stack: ["Next.js", "shadcn/ui", "sheet"],
    icon: Layers3,
    images: [
      "/projects/form-1.png",
      // "/projects/form-2.jpg",
      "/projects/form-3.png",
    ],
    accent: "from-red-500/20 via-blue-500/10 to-transparent",
    github: "",
    demo: "",
    note: "Project experience · Akademi Trainer",
  },
  {
    number: "05",
    title: "Event Notifier",
    type: "WEB APPLICATION",
    description:
      "Aplikasi untuk penjadwalan dan pengingat acara pada perusahaan",
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS", "sheet"],
    icon: Layers3,
    images: ["/projects/event.png", "/projects/event-2.png"],
    accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    github: "",
    demo: "",
    note: "Project experience · Akademi Trainer",
  },
];

const experience = [
  {
    role: "Production and IT Support",
    company: "Akademi Trainer",
    type: "Kontrak",
    date: "Agu 2026 — Sekarang",
    place: "Depok, Indonesia",
    points: [
      "Menyiapkan dan mengonfigurasi perangkat, sistem, serta platform digital untuk event pelatihan.",
      "Memberikan dukungan teknis selama persiapan dan pelaksanaan event untuk meminimalkan gangguan.",
      "Mengidentifikasi kendala teknis dan menentukan solusi sesuai kebutuhan operasional.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "SocketSpace Indonesia",
    type: "Kontrak",
    date: "Nov 2024 — Jan 2025",
    place: "Bandung, Indonesia",
    points: [
      "Membangun dashboard admin dengan Next.js dan Tailwind CSS untuk pengelolaan data siswa.",
      "Mengembangkan aplikasi mobile Flutter untuk pemantauan perkembangan akademik dan aktivitas siswa.",
      "Mengintegrasikan web dan mobile dengan backend melalui REST API serta berkolaborasi dengan tim desain dan backend.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    type: "Freelance",
    date: "Jan 2023 — Sekarang",
    place: "Bandung, Indonesia",
    points: [
      "Membangun antarmuka web responsif dan modular menggunakan Next.js, Tailwind CSS, dan shadcn/ui.",
      "Mengintegrasikan frontend dengan REST API, termasuk pemetaan data dan penanganan respons backend.",
      "Menerjemahkan kebutuhan klien menjadi solusi digital dari tahap analisis hingga implementasi.",
    ],
  },
];

const certificates = [
  {
    title:
      "Learn MERN stack by building real-world applications with Node, Express, MongoDB, React and integrating RESTful APIs",
    organizer: "Udemy",
    description: "Validate the ability to create backend and frontend",
    date: "July 2025",
    image: "/sertifikat/mern-dika.jpg",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-d27652ff-78f1-4955-8167-e48f8ba01315/",
    topics: ["Express", "MongoDB", "React"],
  },
  {
    title: "UI UX with Adobe XD and Figma",
    organizer: "Udemy",
    description:
      "Validation of application design skills using figma and adobe xd",
    date: "July 2025",
    image: "/sertifikat/uiux-dika.jpg",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-d70a4569-ea7c-4d39-adde-000242e30b94/",
    topics: ["Design", "Figma"],
  },
  {
    title: "Google Play Store Listing Certificate",
    organizer: "Google Play Academy",
    description:
      "Validate capabilities for apps that are suitable for the Google Play Store",
    date: "Nov 2024",
    image: "/sertifikat/ggl-play.jpg",
    certificateUrl:
      "https://www.credential.net/d6116848-d9d3-435e-9f18-9650eca85bc6#acc.j8tn2Sdr",
    topics: ["Google Play", "Mobile Dev"],
  },
  {
    title: "C# Unity Game Developer 2D",
    organizer: "GameDev.tv",
    description: "Validation of ability in designing and creating 2D games",
    date: "Aug 2024",
    image: "/sertifikat/unity.jpg",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-9cb18822-f0b7-49c3-9c18-d1b187299cea/",
    topics: ["Unity", "C#"],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [showGf, setShowGf] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-zinc-950/80 backdrop-blur-xl">
        <nav
          className="container-wide flex h-[72px] items-center justify-between relative"
          aria-label="Navigasi utama"
        >
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold tracking-tight text-white"
          >
            <img
              src="/images/profile/profile-pp.jpeg"
              className="w-9 h-9 rounded-xl object-cover"
              alt=""
            />
            <span>
              Dik<span className="text-violet-300">aaa</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#about">
              Tentang
            </a>
            <a className="transition hover:text-white" href="#projects">
              Proyek
            </a>
            <a className="transition hover:text-white" href="#experience">
              Pengalaman
            </a>
            <a className="transition hover:text-white" href="#certificates">
              Sertifikat
            </a>
            <a className="transition hover:text-white" href="#education">
              Pendidikan
            </a>
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              Hubungi Saya <ArrowUpRight size={15} />
            </a>
          </Button>

          {/* Tombol hamburger mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 transition hover:border-violet-300/40 hover:text-violet-200 sm:hidden"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>

          {/* Popup navigasi mobile */}
          <div
            id="mobile-navigation"
            className={`absolute left-4 right-4 top-full mt-3 origin-top rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 sm:hidden ${
              mobileMenuOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-[0.98] opacity-0 pointer-events-none"
            }`}
          >
            {[
              { label: "Beranda", href: "#home" },
              { label: "Tentang Saya", href: "#about" },
              { label: "Proyek", href: "#projects" },
              { label: "Sertifikat", href: "#certificates" },
              { label: "Pendidikan", href: "#education" },
              { label: "Kontak", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-violet-400/10 hover:text-violet-200"
              >
                {item.label}
                <span className="text-xs text-zinc-600">↗</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-[760px] items-center pt-24 sm:min-h-[820px]"
      >
        <div className="grid-glow absolute inset-x-0 top-0 h-[620px] opacity-60" />
        <div className="pointer-events-none absolute -right-32 top-28 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="container-wide relative grid items-center gap-14 py-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-4 py-2 text-xs font-medium text-violet-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to interesting opportunities
            </div>
            <p className="mb-4 text-sm font-medium tracking-wide text-zinc-400">
              Halo, saya Muhamad Andika Rafli 👋
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
              Building digital
              <br className="hidden sm:block" /> experiences that{" "}
              <span className="text-gradient">matter.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Frontend Developer yang berfokus membangun antarmuka web
              responsif, intuitif, dan mudah dikembangkan dengan teknologi
              modern.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  Jelajahi Proyek <ArrowDownRight size={17} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Mari Terhubung <ArrowUpRight size={17} />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> Bandung, Indonesia
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span className="inline-flex items-center gap-2">
                <Code2 size={15} /> 3+ tahun pengalaman
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-500/20 via-indigo-500/5 to-transparent blur-2xl" />
            <div className="glass relative rounded-[30px] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  developer.tsx
                </span>
              </div>
              <div className="py-6 font-mono text-[12px] leading-7 sm:text-[13px]">
                <p className="text-zinc-500">// A little about me</p>
                <p>
                  <span className="text-violet-300">const</span>{" "}
                  <span className="text-sky-200">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-emerald-300">name</span>:{" "}
                  <span className="text-amber-200">"Andika Rafli"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-300">role</span>:{" "}
                  <span className="text-amber-200">"Frontend Developer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-300">stack</span>: [
                </p>
                <p className="pl-8 text-amber-200">"Next.js", "React",</p>
                <p className="pl-8 text-amber-200">"TypeScript", "Flutter"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-emerald-300">focus</span>:{" "}
                  <span className="text-amber-200">"User experience"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-300">coffee</span>:{" "}
                  <span className="text-orange-200">true</span>
                </p>
                <p>{"};"}</p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <div>
                  <p className="text-xs text-zinc-500">Currently focused on</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Clean UI & better UX
                  </p>
                </div>
                <Sparkles className="text-violet-300" size={22} />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/95 p-4 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Check size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Development mindset</p>
                <p className="text-sm font-semibold text-white">
                  Build · Test · Improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad border-t border-white/[0.06]">
        <div className="container-wide">
          <SectionHeading
            eyebrow="01 / Tentang Saya"
            title="Membangun dengan tujuan."
            description="Saya menggabungkan ketelitian teknis dan perhatian terhadap detail untuk menghadirkan produk digital yang nyaman digunakan."
          />

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Galeri Foto */}
            <div className="space-y-4">
              <div
                onDoubleClick={() => setShowGf((prev) => !prev)}
                className="profile-flip-container group cursor-pointer"
                title="Double-click untuk melihat profil"
              >
                <div
                  className={`profile-flip-inner ${showGf ? "is-flipped" : ""}`}
                >
                  {/* Sisi depan: profil Anda */}
                  <div className="profile-flip-face">
                    <img
                      src="/images/profile/profile-main.jpeg"
                      alt="Muhamad Andika Rafli"
                      className="profile-flip-image"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                      <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        Frontend Developer
                      </span>

                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        Muhamad Andika Rafli
                      </h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        Bandung, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Sisi belakang: profil pacar */}
                  <div className="profile-flip-face profile-flip-back">
                    <img
                      src="/images/profile/my-gf.jpeg"
                      alt="My favorite person"
                      className="profile-flip-image"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                    <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                      <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-pink-200 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                        My Favorite Person ❤️
                      </span>

                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        My Favorite Person
                      </h3>
                      <p className="mt-1 text-sm text-zinc-200">
                        The person behind my smile ❤️
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foto Pendukung */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900">
                  <img
                    src="/images/profile/profile-02.jpeg"
                    alt="Andika dalam aktivitas sehari-hari"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900">
                  <img
                    src="/images/profile/profile-01.jpeg"
                    alt="Andika dalam suasana kerja"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Informasi Tentang Saya */}
            <div className="space-y-10">
              <div className="space-y-5 text-[15px] leading-8 text-zinc-400">
                <p>
                  Saya{" "}
                  <strong className="font-medium text-white">
                    Muhamad Andika Rafli
                  </strong>
                  , Frontend Developer dari Bandung dengan pengalaman 3+ tahun
                  sebagai freelancer sejak Januari 2023.
                </p>

                <p>
                  Saya terbiasa membangun antarmuka web responsif menggunakan
                  Next.js, React, Tailwind CSS, dan shadcn/ui, serta
                  mengembangkan aplikasi mobile dengan Flutter. Saya juga
                  berpengalaman mengintegrasikan frontend dengan REST API dan
                  berkolaborasi bersama tim desain maupun backend.
                </p>

                <p>
                  Bagi saya, produk digital yang baik bukan hanya terlihat
                  menarik, tetapi juga mudah digunakan, konsisten, dan dapat
                  dikembangkan seiring kebutuhan.
                </p>

                <div className="flex flex-wrap gap-5 pt-1">
                  <a
                    href="https://github.com/dikaaajs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-violet-300"
                  >
                    <Github size={17} />
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/andika-rafli-7311a4248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-violet-300"
                  >
                    <Linkedin size={17} />
                    LinkedIn
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-violet-400/30"
                  >
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <Code2 size={16} className="text-violet-300" />
                      {skill.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="section-pad border-y border-white/[0.06] bg-zinc-900/30"
      >
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="02 / Selected Work"
              title="Proyek pilihan."
              description="Beberapa contoh proyek berdasarkan pengalaman pengembangan web dan aplikasi. Tautan demo dan repository dapat ditambahkan setelah dipastikan."
            />
            <a
              href="https://github.com/dikaaajs"
              target="_blank"
              rel="noreferrer"
              className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
            >
              Semua repository <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              return (
                <article
                  key={project.number}
                  className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950/70"
                >
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${project.accent} px-3 pb-1 pt-4`}
                  >
                    <span className="absolute left-5 top-5 z-20 font-mono text-xs text-white/60">
                      {project.number} / 03
                    </span>
                    <span className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[9px] font-bold tracking-[.14em] text-zinc-300 backdrop-blur">
                      {project.type}
                    </span>
                    <div className="pt-7">
                      <ProjectGallery
                        project={{
                          title: project.title,
                          images: project.images,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 border-t border-white/[0.07] pt-4 text-xs leading-5 text-zinc-500">
                      {project.note}
                    </p>
                    <div className="mt-4 flex gap-2">
                      {project.github ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github size={14} /> Lihat GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          disabled
                        >
                          <Github size={14} /> GitHub Private
                        </Button>
                      )}
                      {project.demo ? (
                        <Button asChild size="sm" className="flex-1">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo <ExternalLink size={14} />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          size="sm"
                          className="flex-1"
                          disabled
                        >
                          Demo tidak tersedia
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="03 / Pengalaman"
            title="Perjalanan profesional."
            description="Pengalaman mengerjakan produk digital, berkolaborasi lintas tim, dan mendukung kebutuhan teknologi."
          />
          <div className="relative ml-2 space-y-10 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
            {experience.map((job) => (
              <article key={job.company} className="relative">
                <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-violet-300 bg-zinc-950 shadow-[0_0_16px_rgba(167,139,250,.35)] sm:-left-[47px]" />
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-medium text-violet-200">
                      {job.company} <span className="text-zinc-600">·</span>{" "}
                      {job.type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                      <MapPin size={13} />
                      {job.place}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400">
                    <CalendarDays size={13} />
                    {job.date}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-zinc-400"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-violet-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certificates"
        className="section-pad border-y border-white/[0.06] bg-zinc-900/30"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="04 / Sertifikat"
            title="Terus belajar, terus bertumbuh."
            description="Sertifikasi yang mendukung pengembangan kemampuan teknis dan pemahaman desain antarmuka."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <CertificateCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="05 / Pendidikan & Organisasi"
            title="Fondasi untuk berkembang."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="eyebrow">Pendidikan</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Pendidikan formal
                  </h3>
                </div>
              </div>

              {/* Pendidikan Tinggi */}
              <div className="border-l border-violet-300/30 pl-5">
                <h4 className="font-semibold text-white">
                  S1 - Sistem Informasi
                </h4>
                <p className="mt-1 text-sm text-zinc-400">
                  Universitas Terbuka · Jakarta
                </p>
                <p className="mt-2 text-xs text-zinc-500">
                  Agu 2026 — Sekarang
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Mendalami sistem informasi dan penerapan teknologi untuk
                  mendukung kebutuhan organisasi.
                </p>
              </div>

              <br />

              {/* SMA */}
              <div className="border-l border-violet-300/30 pl-5">
                <h4 className="font-semibold text-white">SMA - MIPA</h4>
                <p className="mt-1 text-sm text-zinc-400">SMAN 24 Bandung</p>
                <p className="mt-2 text-xs text-zinc-500">2020 — 2024</p>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Mempelajari dasar dasar sains dan teknologi
                </p>
              </div>
            </div>

            {/* organisasi */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                  <BriefcaseBusiness size={21} />
                </div>
                <div>
                  <p className="eyebrow">Organisasi</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Pengalaman kepemimpinan
                  </h3>
                </div>
              </div>
              <p className="text-xs font-medium text-violet-200">
                IT 24 <span className="text-zinc-600">·</span> Bandung
              </p>
              <h4 className="mt-2 text-xl font-semibold text-white">
                Wakil Ketua
              </h4>
              <p className="mt-1 text-sm text-zinc-500">2021 — 2023</p>
              <p className="mt-5 text-sm leading-7 text-zinc-400">
                Memimpin kegiatan organisasi ekstrakurikuler IT tingkat sekolah
                menengah, menyusun program kerja, dan menyelenggarakan sesi
                knowledge sharing seputar pemrograman bagi anggota.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-zinc-400">
                  Leadership
                </span>
                <span className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-zinc-400">
                  Teamwork
                </span>
                <span className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-zinc-400">
                  Knowledge Sharing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section-pad relative border-t border-white/[0.06]"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[110px]" />
        <div className="container-wide relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">06 / Contact Me</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Punya ide menarik?
              <br />
              <span className="text-gradient">Mari wujudkan bersama.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400">
              Terbuka untuk peluang kerja, freelance, kolaborasi, dan diskusi
              seputar pengembangan produk digital.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:zoneandika@gmail.com">
                  <Mail size={17} /> Email Saya <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/6285624745579"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Send size={16} /> Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
            <a
              href="mailto:zoneandika@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-violet-300/30"
            >
              <Mail size={18} className="text-violet-300" />
              <div className="min-w-0">
                <p className="text-xs text-zinc-500">Email</p>
                <p className="mt-1 truncate text-sm text-zinc-200">
                  zoneandika@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/andika-rafli-7311a4248/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-violet-300/30"
            >
              <Linkedin size={18} className="text-violet-300" />
              <div>
                <p className="text-xs text-zinc-500">LinkedIn</p>
                <p className="mt-1 text-sm text-zinc-200">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/dikaaajs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-violet-300/30"
            >
              <Github size={18} className="text-violet-300" />
              <div>
                <p className="text-xs text-zinc-500">GitHub</p>
                <p className="mt-1 text-sm text-zinc-200">@dikaaajs</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-6">
        <div className="container-wide flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-500">© 2026 Muhamad Andika Rafli.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-white"
          >
            Kembali ke atas <ArrowDown size={13} className="rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
