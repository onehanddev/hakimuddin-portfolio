"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Mail,
  MousePointer2,
  PanelsTopLeft,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const links = {
  email: "mailto:hakim.haweliwala@gmail.com",
  github: "https://github.com/onehanddev",
  linkedin: "https://www.linkedin.com/in/hakimuddin-haweliwala/",
  resume: "/resume.pdf",
  toptal: "https://www.toptal.com/developers/resume/hakimuddin-haweliwala",
};

const metrics = [
  { value: "10+", label: "years building production UI" },
  { value: "40%", label: "less integration effort on editor plugins" },
  { value: "35%", label: "fewer UI bugs after React modernization" },
  { value: "60%", label: "faster loads with offline-first architecture" },
];

const focusAreas = [
  {
    title: "AI-assisted editors",
    text: "Context-aware suggestions, autocomplete, pitch generation, prompt rewrites, version history, and rich text controls.",
    icon: BrainCircuit,
  },
  {
    title: "Design-system primitives",
    text: "Accessible components, keyboard behavior, focus management, Storybook-ready APIs, and reusable interaction patterns.",
    icon: PanelsTopLeft,
  },
  {
    title: "Performance platforms",
    text: "React/Next.js migrations, IndexedDB, Web Workers, rendering reliability, CI/CD, and product-grade interaction polish.",
    icon: TerminalSquare,
  },
];

type FeaturedProject = {
  name: string;
  role: string;
  year: string;
  image: string;
  video?: string;
  href: string;
  linkLabel: string;
  accent: string;
  imageFit?: "cover" | "contain";
  summary: string;
  points: string[];
  tags: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Handof for Linear",
    role: "Creator / Full-stack Product Engineer",
    year: "Figma plugin",
    image: "/projects/handof-figma-linear.webp",
    video: "/projects/handof-demo.mp4",
    href: "https://www.figma.com/community/plugin/1582779918962363836/handof-for-linear",
    linkLabel: "View plugin",
    accent: "bg-[#5e6ad2]",
    imageFit: "contain",
    summary:
      "A FigJam-to-Linear plugin that turns workshop output into tracked engineering work.",
    points: [
      "Creates and updates Linear issues from selected FigJam sticky notes, shapes, frames, and text while preserving node context.",
      "Built Google sign-in, Linear OAuth, persistent sessions, Supabase link storage, FigJam back-links, and Mixpanel activation telemetry.",
    ],
    tags: [
      "Figma Plugin API",
      "TypeScript",
      "Linear API",
      "OAuth",
      "Supabase",
    ],
  },
  {
    name: "LottieFiles Creator",
    role: "Senior Frontend Developer",
    year: "Animation editor",
    image: "/projects/lottiefiles-creator.webp",
    video: "/projects/lottiefiles-creator.mp4",
    href: "https://lottie.new",
    linkLabel: "Open product",
    accent: "bg-[#12d5ae]",
    summary:
      "A dense web animation editor built with React, TypeScript, Zustand, and Tailwind.",
    points: [
      "Timeline editing, layer hierarchy, shape transformation, segment management, marquee selection, and frame trimming.",
      "Reusable hold-to-open menu interactions, smarter segment naming, and editor reliability fixes for shape scaling.",
    ],
    tags: ["React", "TypeScript", "Zustand", "Tailwind", "Editor UX"],
  },
  {
    name: "MUI Base UI",
    role: "Open Source Contributor",
    year: "9.6k-star OSS",
    image: "/projects/mui-base-ui.webp",
    video: undefined,
    href: "https://github.com/mui/base-ui/pulls?q=author%3Aonehanddev",
    linkLabel: "View PRs",
    accent: "bg-[#7c5cff]",
    summary:
      "Accessible, unstyled React primitives for teams that need deep control over component behavior.",
    points: [
      "Improved keyboard navigation, keepMounted logic, mouse interactions, and disabled-state focus handling.",
      "Touched Menu, Checkbox, Radio, Select, Switch, and Slider behavior in public TypeScript contributions.",
    ],
    tags: ["Open source", "Accessibility", "React", "TypeScript", "Components"],
  },
  {
    name: "BrowserStack App Live",
    role: "Senior Frontend Developer",
    year: "Product modernization",
    image: "/projects/browserstack-app-live.webp",
    video: "/projects/browserstack-app-live.mp4",
    href: "https://www.browserstack.com/app-live",
    linkLabel: "Open product",
    accent: "bg-[#ffb000]",
    summary:
      "Real-device app testing experiences modernized from legacy jQuery into React, Next.js, and Redux.",
    points: [
      "Reduced frontend debt, improved maintainability, and decreased UI-related bug reports by 35%.",
      "Built polished product interactions with Framer Motion and internal Node/Express automation for debugging workflows.",
    ],
    tags: ["Next.js", "React", "Redux", "Framer Motion", "Node.js"],
  },
];

const productWork = [
  {
    name: "Screenplay AI",
    role: "Lead Frontend Engineer",
    period: "2025",
    icon: Sparkles,
    text: "Built the AI-native MVP for a screenplay writing platform with Vue 3, Tailwind, TipTap, and Gemini API workflows.",
    details: [
      "Screenplay-aware editor blocks, scene headers, dialogue, parentheticals, and real-time validation.",
      "Inline suggestions, pitch generation, prompt rewrites, context-aware autocomplete, version history, and drag-and-drop scenes.",
    ],
  },
  {
    name: "ServiceNow editor platform",
    role: "Senior Frontend Engineer",
    period: "Oct 2022 - May 2026",
    icon: BriefcaseBusiness,
    text: "Architected AI-assisted dropdown and HTML editor controls across enterprise workflows.",
    details: [
      "High-performance TinyMCE @mention plugin with lazy-loaded suggestions, bulk tagging, and event-driven integration.",
      "ARIA, keyboard navigation, undo-redo, focus management, and CI/CD that cut release cycle time by 30%.",
    ],
  },
];

const experience = [
  {
    company: "ServiceNow",
    title: "Senior Frontend Engineer",
    period: "Oct 2022 - May 2026",
    text: "AI-assisted enterprise UX, TinyMCE plugins, accessibility, editor controls, autocomplete, CI/CD, and distributed US/EU collaboration.",
  },
  {
    company: "BrowserStack",
    title: "Senior Frontend Developer",
    period: "Nov 2021 - Sep 2022",
    text: "React/Next.js modernization, Framer Motion product polish, Redux workflows, and Node/Express internal automation.",
  },
  {
    company: "Globant",
    title: "Senior Web UI Developer",
    period: "Feb 2020 - Nov 2021",
    text: "Atomic component library, D3 dashboards, ambiguous workflow translation, and reusable frontend architecture.",
  },
  {
    company: "HCL Technologies",
    title: "Front End Developer",
    period: "Oct 2018 - Feb 2020",
    text: "Offline-first IndexedDB caching, Web Workers, WebGL dashboards, and performance-sensitive enterprise modules.",
  },
  {
    company: "Five Exceptions",
    title: "React Native Developer",
    period: "Dec 2015 - Feb 2018",
    text: "Mobile and web application delivery, reusable theming, modular styling, optimized state management, and release support.",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Vue 3",
  "TinyMCE",
  "TipTap",
  "Material UI",
  "Redux",
  "Zustand",
  "Storybook",
  "Jest",
  "RTL",
  "D3.js",
  "WebGL",
  "IndexedDB",
  "Web Workers",
  "Node.js",
  "Express",
  "AWS",
  "GitHub Actions",
  "Jenkins",
  "WCAG",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

function ExternalLink({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const isMail = href.startsWith("mailto:");
  const isHash = href.startsWith("#");
  const isRootRelative = href.startsWith("/");
  const isPdf = href.endsWith(".pdf");
  const opensNewTab = isPdf || (!isMail && !isHash && !isRootRelative);
  const styles = {
    primary:
      "border-[#111] bg-[#111] text-white shadow-[0_12px_30px_rgba(17,17,17,0.18)] hover:-translate-y-0.5 hover:bg-[#2b2b2b]",
    secondary:
      "border-[#d8d2c6] bg-white text-[#171512] hover:-translate-y-0.5 hover:border-[#111]",
    ghost:
      "border-transparent bg-transparent text-[#171512] hover:bg-[#f2eee6]",
  };

  return (
    <a
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition ${styles[variant]}`}
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={false}
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={container}
    >
      <motion.p
        variants={item}
        className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#0b8b7a]"
      >
        {kicker}
      </motion.p>
      <motion.h2
        variants={item}
        className="text-balance text-3xl font-semibold tracking-tight text-[#171512] sm:text-5xl"
      >
        {title}
      </motion.h2>
      {text ? (
        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-[#67615a] sm:text-lg"
        >
          {text}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d7d0c4] bg-[#f7f3eb] shadow-[0_24px_70px_rgba(34,26,17,0.14)]">
      <div className="flex h-9 items-center gap-2 border-b border-[#ded6c9] bg-[#fffaf1] px-3">
        <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="size-2.5 rounded-full bg-[#f7b731]" />
        <span className="size-2.5 rounded-full bg-[#2ecc71]" />
        <div className="ml-2 h-4 flex-1 rounded bg-[#ebe3d5]" />
      </div>
      {children}
    </div>
  );
}

function ProjectMedia({ project }: { project: FeaturedProject }) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const fitClass =
    project.imageFit === "contain" ? "object-contain" : "object-cover";

  useEffect(() => {
    if (!project.video || shouldLoadVideo) {
      return;
    }

    const media = mediaRef.current;
    if (!media) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(media);

    return () => observer.disconnect();
  }, [project.video, shouldLoadVideo]);

  return (
    <div
      ref={mediaRef}
      className={`relative min-h-[260px] overflow-hidden sm:min-h-[360px] ${
        project.imageFit === "contain" ? "bg-[#f5f9ff]" : "bg-[#171512]"
      }`}
    >
      {project.video && shouldLoadVideo ? (
        <video
          className={`absolute inset-0 size-full transition duration-700 hover:scale-[1.03] ${fitClass}`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={project.image}
          aria-label={`${project.name} product walkthrough`}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={project.image}
          alt={`${project.name} interface screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`transition duration-700 hover:scale-[1.03] ${fitClass}`}
        />
      )}
    </div>
  );
}

function ScreenplayMock() {
  return (
    <BrowserChrome>
      <div className="grid min-h-[300px] grid-cols-[0.8fr_1.2fr] bg-[#101414] text-white max-sm:grid-cols-1">
        <div className="border-r border-white/10 p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8bd3c7]">
              Screenplay AI
            </span>
            <BrainCircuit className="size-5 text-[#f5c04d]" />
          </div>
          {["Cold open", "INT. LAB - NIGHT", "Dialogue pass", "Pitch draft"].map(
            (label, index) => (
              <div
                className="mb-3 rounded-md border border-white/10 bg-white/[0.05] p-3"
                key={label}
              >
                <div className="mb-2 h-2 w-16 rounded bg-white/20" />
                <div className="flex items-center gap-2">
                  <span
                    className={`size-2 rounded-full ${
                      index === 1 ? "bg-[#12d5ae]" : "bg-white/25"
                    }`}
                  />
                  <span className="text-sm text-white/75">{label}</span>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="p-5">
          <div className="mb-4 flex items-center gap-2 text-xs text-white/45">
            <span>AI rewrite</span>
            <span className="h-px flex-1 bg-white/10" />
            <span>v4</span>
          </div>
          <div className="rounded-md bg-[#f7f3eb] p-5 font-mono text-[#171512]">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#0b8b7a]">
              INT. SOUNDSTAGE - MIDNIGHT
            </p>
            <p className="mb-4 leading-7">
              The cursor waits at the end of a half-finished line. A suggestion
              appears, calm and specific.
            </p>
            <div className="rounded-md border border-[#d7d0c4] bg-white p-4">
              <p className="mb-2 text-xs font-bold text-[#a24d2a]">
                Context-aware suggestion
              </p>
              <p className="text-sm leading-6 text-[#4e4943]">
                Tighten the exchange, keep the subtext, and preserve screenplay
                structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#171512]">
      <nav className="sticky top-0 z-50 border-b border-[#e1d8ca]/80 bg-[#f7f3eb]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Home">
            <span className="relative block size-10 overflow-hidden rounded-md border border-[#d8d0c2] bg-white shadow-sm">
              <Image
                src="/hakimuddin.jpg"
                alt="Hakimuddin Haweliwala"
                fill
                sizes="40px"
                priority
                className="object-cover"
              />
            </span>
            <span className="hidden text-sm font-semibold sm:block">
              Hakimuddin Haweliwala
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#67615a] md:flex">
            <a className="transition hover:text-[#171512]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#171512]" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-[#171512]" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              className="grid size-10 place-items-center rounded-md text-[#4f4941] transition hover:bg-[#ede5d8] hover:text-[#171512]"
              href={links.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 className="size-5" />
            </a>
            <a
              className="grid size-10 place-items-center rounded-md text-[#4f4941] transition hover:bg-[#ede5d8] hover:text-[#171512]"
              href={links.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness className="size-5" />
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative isolate overflow-hidden border-b border-[#e1d8ca]"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(#e6ddcf_1px,transparent_1px),linear-gradient(90deg,#e6ddcf_1px,transparent_1px)] bg-[size:52px_52px] opacity-55" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#f7f3eb] to-transparent" />
        <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-[#171512] sm:text-6xl lg:text-7xl">
              Building sharp, humane interfaces for complex products.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#5f5a53] sm:text-xl">
              I design and ship AI-assisted editor UX, design-system primitives,
              high-performance dashboards, and product workflows in React,
              TypeScript, Next.js, Vue, Tailwind, and Framer Motion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalLink href="#projects" variant="primary">
                <MousePointer2 className="size-4" />
                View projects
              </ExternalLink>
              <ExternalLink href={links.resume}>
                <Download className="size-4" />
                Resume
              </ExternalLink>
              <ExternalLink href={links.toptal} variant="ghost">
                Toptal
                <ArrowUpRight className="size-4" />
              </ExternalLink>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr] lg:grid-cols-1 xl:grid-cols-[0.86fr_1.14fr]">
              <div className="overflow-hidden rounded-lg border border-[#d8d0c2] bg-white shadow-[0_24px_70px_rgba(34,26,17,0.12)]">
                <div className="relative aspect-square">
                  <Image
                    src="/hakimuddin.jpg"
                    alt="Hakimuddin Haweliwala"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-[#eee6da] p-4">
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    Toptal verified engineer
                    <CheckCircle2 className="size-4 text-[#0b8b7a]" />
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#67615a]">
                    Frontend-heavy product engineer trusted across enterprise,
                    SaaS, editor tooling, and startup MVP work.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <motion.div
                    className="rounded-lg border border-[#d8d0c2] bg-white/88 p-5 shadow-[0_18px_50px_rgba(34,26,17,0.08)]"
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    <p className="text-4xl font-semibold tracking-tight">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#67615a]">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.article
                className="rounded-lg border border-[#ded6c8] bg-white p-6 shadow-[0_14px_42px_rgba(34,26,17,0.06)]"
                key={area.title}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                variants={item}
              >
                <Icon className="mb-5 size-7 text-[#0b8b7a]" />
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#67615a]">
                  {area.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Selected Work"
          title="Public proof, product depth, and editor craft."
          text="These are the projects most aligned with senior frontend, UI platform, product engineering, and AI-assisted tool roles."
        />
        <div className="mx-auto grid max-w-7xl gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              className="grid overflow-hidden rounded-lg border border-[#ded6c8] bg-white shadow-[0_24px_70px_rgba(34,26,17,0.09)] lg:grid-cols-[0.92fr_1.08fr]"
              key={project.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ProjectMedia project={project} />
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`size-3 rounded-full ${project.accent}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-[#67615a]">
                      {project.role}
                    </span>
                    <span className="rounded-md bg-[#f2eee6] px-2 py-1 text-xs font-bold text-[#4f4941]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5f5a53]">
                    {project.summary}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {project.points.map((point) => (
                      <p
                        className="flex gap-3 text-sm leading-7 text-[#4f4941]"
                        key={point}
                      >
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#0b8b7a]" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-md border border-[#e3dbcf] px-3 py-1.5 text-xs font-semibold text-[#67615a]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink href={project.href}>
                    {project.linkLabel}
                    <ArrowUpRight className="size-4" />
                  </ExternalLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.p
              variants={item}
              className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#0b8b7a]"
            >
              AI Editor Work
            </motion.p>
            <motion.h2
              variants={item}
              className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              The private work still tells a public story.
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-5 text-base leading-8 text-[#67615a] sm:text-lg"
            >
              A lot of my best work lives inside enterprise or early-stage
              products. The pattern is consistent: make dense, stateful tools
              feel precise, fast, and forgiving.
            </motion.p>
            <motion.div variants={item} className="mt-8">
              <ScreenplayMock />
            </motion.div>
          </motion.div>
          <div className="grid content-start gap-4">
            {productWork.map((work) => {
              const Icon = work.icon;
              return (
                <motion.article
                  className="rounded-lg border border-[#ded6c8] bg-white p-6 shadow-[0_14px_42px_rgba(34,26,17,0.06)]"
                  key={work.name}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0b8b7a]">
                        {work.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">
                        {work.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#67615a]">
                        {work.role}
                      </p>
                    </div>
                    <Icon className="size-7 text-[#a24d2a]" />
                  </div>
                  <p className="text-base leading-8 text-[#4f4941]">{work.text}</p>
                  <div className="mt-5 grid gap-3">
                    {work.details.map((detail) => (
                      <p
                        className="flex gap-3 text-sm leading-7 text-[#67615a]"
                        key={detail}
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f5b83b]" />
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title="From mobile apps to enterprise editor infrastructure."
        />
        <div className="mx-auto max-w-5xl">
          <div className="relative border-l border-[#d8d0c2] pl-6 sm:pl-10">
            {experience.map((job, index) => (
              <motion.article
                className="relative pb-10 last:pb-0"
                key={job.company}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <span className="absolute -left-[31px] top-1 grid size-4 place-items-center rounded-full bg-[#f7f3eb] sm:-left-[47px]">
                  <span className="size-2.5 rounded-full bg-[#0b8b7a]" />
                </span>
                <div className="rounded-lg border border-[#ded6c8] bg-white p-5 shadow-[0_14px_38px_rgba(34,26,17,0.05)]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{job.company}</h3>
                      <p className="mt-1 text-sm font-semibold text-[#4f4941]">
                        {job.title}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-[#0b8b7a]">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#67615a]">
                    {job.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-[#171512] bg-[#171512] p-6 text-white shadow-[0_28px_80px_rgba(17,17,17,0.22)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8bd3c7]">
                Toolkit
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Fast in the stack, patient with the product.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                The useful combination is technical depth, interaction taste, and
                the willingness to sweat the last 10 percent of a workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  className="rounded-md border border-white/12 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/82"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
        >
          <motion.p
            variants={item}
            className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#0b8b7a]"
          >
            Contact
          </motion.p>
          <motion.h2
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Let&apos;s build the kind of interface people trust at speed.
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#67615a] sm:text-lg"
          >
            I&apos;m a strong fit for senior frontend, UI platform, design-system,
            frontend-heavy fullstack, founding engineer, and AI product roles.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <ExternalLink href={links.email} variant="primary">
              <Mail className="size-4" />
              Email me
            </ExternalLink>
            <ExternalLink href={links.linkedin}>
              <BriefcaseBusiness className="size-4" />
              LinkedIn
            </ExternalLink>
            <ExternalLink href={links.github}>
              <Code2 className="size-4" />
              GitHub
            </ExternalLink>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-[#e1d8ca] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#67615a] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Hakimuddin Haweliwala</p>
          <div className="flex flex-wrap gap-4">
            <a
              className="font-semibold hover:text-[#171512]"
              href={links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="font-semibold hover:text-[#171512]"
              href={links.toptal}
              target="_blank"
              rel="noreferrer"
            >
              Toptal
            </a>
            <a
              className="font-semibold hover:text-[#171512]"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
