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
import { profile, seoDescription, siteUrl } from "./site";

const links = {
  email: `mailto:${profile.email}`,
  github: profile.github,
  linkedin: profile.linkedin,
  resume: profile.resume,
  toptal: profile.toptal,
};

const focusAreas = [
  {
    title: "AI-assisted editors",
    text: "Interfaces that help at the right moment: suggestions, autocomplete, rewrites, history, and rich text controls that stay out of the way.",
    icon: BrainCircuit,
  },
  {
    title: "Design-system primitives",
    text: "Components with taste and manners: accessible APIs, clean keyboard behavior, careful focus states, and reusable interaction patterns.",
    icon: PanelsTopLeft,
  },
  {
    title: "Performance platforms",
    text: "Fast, resilient product surfaces powered by React, Next.js, IndexedDB, Web Workers, reliable rendering, CI/CD, and calm interaction polish.",
    icon: TerminalSquare,
  },
];

const hiringQuestions = [
  {
    question: "Who should reach out?",
    answer:
      "If you are building an AI product, a complex editor, a design system, or a SaaS workflow that needs to feel clear, fast, and dependable, I can help. I am open to both full-time and contract opportunities.",
  },
  {
    question: "What can I own end to end?",
    answer:
      "I am comfortable taking a fuzzy product idea, finding the shape of it, and turning it into a production interface, from React and Next.js architecture to editor UX, accessibility, performance, API integration, and rollout.",
  },
  {
    question: "Where do I move fastest?",
    answer:
      "I move fastest where product thinking meets frontend craft: React, TypeScript, Next.js, Tailwind CSS, Framer Motion, Vue, Node.js, Express, AWS, CI/CD, and modern AI-assisted workflows.",
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
      "A FigJam-to-Linear plugin that turns a messy workshop wall into real, tracked engineering work.",
    points: [
      "Creates and updates Linear issues from selected sticky notes, shapes, frames, and text while keeping the original FigJam context close.",
      "Built Google sign-in, Linear OAuth, persistent sessions, Supabase link storage, FigJam back-links, and Mixpanel telemetry around activation.",
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
      "A serious animation editor that still feels nimble in the hands.",
    points: [
      "Shipped timeline editing, layer hierarchy, shape transformation, segment management, marquee selection, and frame trimming.",
      "Added reusable hold-to-open menu interactions, smarter segment naming, and reliability fixes around shape scaling.",
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
      "Accessible, unstyled React primitives for teams that want control without rebuilding behavior from scratch.",
    points: [
      "Improved keyboard navigation, keepMounted logic, mouse interactions, and disabled-state focus behavior.",
      "Contributed TypeScript changes across Menu, Checkbox, Radio, Select, Switch, and Slider primitives.",
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
      "Real-device app testing workflows moved out of legacy jQuery and into a cleaner React, Next.js, and Redux foundation.",
    points: [
      "Reduced frontend debt, improved maintainability, and helped cut UI-related bug reports by 35%.",
      "Built smoother product interactions with Framer Motion and internal Node/Express automation for debugging workflows.",
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
    text: "Built the AI-native MVP for a screenplay writing platform where the editor respects the format and the assistant respects the writer.",
    details: [
      "Screenplay-aware editor blocks, scene headers, dialogue, parentheticals, and real-time validation in Vue 3, Tailwind, and TipTap.",
      "Inline suggestions, pitch generation, prompt rewrites, context-aware autocomplete, version history, and drag-and-drop scenes powered by Gemini workflows.",
    ],
  },
  {
    name: "ServiceNow editor platform",
    role: "Senior Frontend Engineer",
    period: "Oct 2022 - May 2026",
    icon: BriefcaseBusiness,
    text: "Architected AI-assisted dropdown and HTML editor controls for enterprise workflows where correctness, speed, and accessibility all matter.",
    details: [
      "High-performance TinyMCE @mention plugin with lazy-loaded suggestions, bulk tagging, and event-driven integration.",
      "ARIA, keyboard navigation, undo-redo, focus management, and CI/CD improvements that cut release cycle time by 30%.",
    ],
  },
];

const experience = [
  {
    company: "ServiceNow",
    title: "Senior Frontend Engineer",
    period: "Oct 2022 - May 2026",
    text: "Built AI-assisted enterprise UX, TinyMCE plugins, accessible editor controls, autocomplete systems, and CI/CD improvements with distributed US/EU teams.",
  },
  {
    company: "BrowserStack",
    title: "Senior Frontend Developer",
    period: "Nov 2021 - Sep 2022",
    text: "Modernized product surfaces with React and Next.js, added Framer Motion polish, refined Redux workflows, and built Node/Express internal automation.",
  },
  {
    company: "Globant",
    title: "Senior Web UI Developer",
    period: "Feb 2020 - Nov 2021",
    text: "Created atomic component systems, D3 dashboards, and reusable frontend architecture from ambiguous product workflows.",
  },
  {
    company: "HCL Technologies",
    title: "Front End Developer",
    period: "Oct 2018 - Feb 2020",
    text: "Built offline-first IndexedDB caching, Web Worker flows, WebGL dashboards, and performance-sensitive enterprise modules.",
  },
  {
    company: "Five Exceptions",
    title: "React Native Developer",
    period: "Dec 2015 - Feb 2018",
    text: "Delivered mobile and web apps with reusable theming, modular styling, optimized state management, and practical release support.",
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

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profile.name} Portfolio`,
      description: seoDescription,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: `${profile.name} - ${profile.title}`,
      description: seoDescription,
      dateModified: "2026-05-25",
      inLanguage: "en",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}${profile.image}`,
      email: profile.email,
      jobTitle: profile.title,
      description: seoDescription,
      sameAs: [profile.github, profile.linkedin, profile.toptal],
      knowsAbout: skills,
      hasOccupation: {
        "@type": "Occupation",
        name: profile.title,
        skills: skills.join(", "),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#featured-work`,
      name: "Featured frontend engineering projects",
      itemListElement: featuredProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          url: project.href,
          image: `${siteUrl}${project.image}`,
          creator: {
            "@id": `${siteUrl}/#person`,
          },
          keywords: project.tags.join(", "),
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#hiring-faq`,
      mainEntity: hiringQuestions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const structuredData = JSON.stringify(portfolioSchema).replace(/</g, "\\u003c");

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
      className="mx-auto mb-8 max-w-3xl text-center"
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
        className="text-balance text-2xl font-semibold tracking-tight text-[#171512] sm:text-4xl"
      >
        {title}
      </motion.h2>
      {text ? (
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-[#67615a]"
        >
          {text}
        </motion.p>
      ) : null}
    </motion.div>
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
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
            <a className="transition hover:text-[#171512]" href="#hire">
              Hire
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
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-16">
          <div>
            <h1 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-[#171512] sm:text-4xl lg:text-5xl">
              Building sharp, humane interfaces for complex products.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[#5f5a53]">
              I help AI products, editors, and SaaS teams turn dense workflows
              into interfaces that feel fast, clear, and quietly delightful.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-lg border border-[#d8d0c2] bg-white shadow-[0_18px_50px_rgba(34,26,17,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/hakimuddin.jpg"
                  alt="Hakimuddin Haweliwala"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-[#eee6da] p-4">
                <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  Toptal verified engineer
                  <CheckCircle2 className="size-4 text-[#0b8b7a]" />
                </p>
                <p className="mt-2 text-sm leading-6 text-[#67615a]">
                  Product-minded frontend engineer for SaaS, enterprise, editor
                  tooling, and startup MVP work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.article
                className="rounded-lg border border-[#ded6c8] bg-white p-5 shadow-[0_10px_30px_rgba(34,26,17,0.05)]"
                key={area.title}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                variants={item}
              >
                <Icon className="mb-5 size-7 text-[#0b8b7a]" />
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#67615a]">
                  {area.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Selected Work"
          title="Work that turns product complexity into momentum."
          text="Public and demonstrable work across plugins, editors, open source, and modernization, with the important details kept visible."
        />
        <div className="mx-auto grid max-w-5xl gap-5">
          {featuredProjects.map((project, index) => (
            <motion.article
              className="grid overflow-hidden rounded-lg border border-[#ded6c8] bg-white shadow-[0_14px_36px_rgba(34,26,17,0.06)] lg:grid-cols-[0.9fr_1.1fr]"
              key={project.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ProjectMedia project={project} />
              <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
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
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5f5a53]">
                    {project.summary}
                  </p>
                  <div className="mt-5 grid gap-3">
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
                <div className="mt-7">
                  <div className="mb-5 flex flex-wrap gap-2">
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

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Additional Work"
          title="Private work, with the signal brought forward."
          text="Some of the most interesting work lives behind enterprise walls or early-stage products. Here is the useful shape of it."
        />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {productWork.map((work) => {
            const Icon = work.icon;
            return (
              <motion.article
                className="rounded-lg border border-[#ded6c8] bg-white p-6 shadow-[0_10px_30px_rgba(34,26,17,0.05)]"
                key={work.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
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
                  <Icon className="size-6 text-[#a24d2a]" />
                </div>
                <p className="text-base leading-7 text-[#4f4941]">{work.text}</p>
                <ul className="mt-4 grid gap-2">
                  {work.details.map((detail) => (
                    <li
                      className="flex gap-3 text-sm leading-6 text-[#67615a]"
                      key={detail}
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f5b83b]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title="A steady path through serious product engineering."
        />
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-[#ded6c8] rounded-lg border border-[#ded6c8] bg-white">
            {experience.map((job, index) => (
              <motion.article
                className="p-5 sm:p-6"
                key={job.company}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div className="grid gap-3 sm:grid-cols-[0.72fr_1.28fr] sm:gap-8">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#4f4941]">
                      {job.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#0b8b7a]">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-[#67615a]">
                    {job.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="Toolkit"
            title="Tools I trust when the work has to ship."
            text="The practical stack behind the interfaces, editors, and systems above."
          />
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                className="rounded-md border border-[#ded6c8] bg-white px-3 py-2 text-sm font-semibold text-[#5f5a53]"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="hire" className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Hiring Fit"
          title="For founders and teams who need frontend clarity."
          text="A few honest answers for the conversations that are usually worth having."
        />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {hiringQuestions.map((item) => (
            <article
              className="rounded-lg border border-[#ded6c8] bg-white p-5 shadow-[0_10px_30px_rgba(34,26,17,0.05)]"
              key={item.question}
            >
              <h3 className="text-base font-semibold leading-6 text-[#171512]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#67615a]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
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
            className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Let&apos;s make the product feel as good as the idea.
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#67615a]"
          >
            I&apos;m a strong fit for senior frontend, UI platform,
            design-system, frontend-heavy fullstack, founding engineer, and AI
            product roles.
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
    </>
  );
}
