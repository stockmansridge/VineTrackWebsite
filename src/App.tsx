import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Calculator,
  Check,
  CircleDot,
  ClipboardList,
  DollarSign,
  FileSpreadsheet,
  Grape,
  MapPinned,
  ShieldCheck,
  Tractor,
  Wrench,
} from "lucide-react";

const APP_ICON = "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/ios/VineTrack/Assets.xcassets/AppIcon.appiconset/icon.png";
const APP_STORE_BADGE = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

const BRAND = {
  primary: "#263318",
  secondary: "#7A4E2D",
  accent: "#C8913A",
};

const features = [
  {
    icon: MapPinned,
    title: "Field issue logging",
    text: "Drop pins for repairs, observations, maintenance jobs, and block notes while moving through the vineyard.",
  },
  {
    icon: ClipboardList,
    title: "Spray program records",
    text: "Keep practical spray records and export reports for compliance, planning, and team communication.",
  },
  {
    icon: DollarSign,
    title: "Costing insights",
    text: "Track vineyard costs across chemical, fuel, labour, and maintenance so day-to-day work is easier to understand financially.",
  },
  {
    icon: Calculator,
    title: "Vineyard tools",
    text: "Access practical tools including yield estimation, work task calculation, and other in-field vineyard calculations.",
  },
  {
    icon: Wrench,
    title: "Maintenance logging",
    text: "Record vineyard repairs, maintenance items, and follow-up jobs in one place so nothing gets missed.",
  },
  {
    icon: Grape,
    title: "Growth stage tracking",
    text: "Record E-L stages block by block and build a clearer seasonal picture across the vineyard.",
  },
  {
    icon: Tractor,
    title: "Row-by-row workflow",
    text: "Guide operators through vineyard trips with a workflow designed around real tractor movement and paddock use.",
  },
  {
    icon: FileSpreadsheet,
    title: "Report exports",
    text: "Export useful records for vineyard teams, managers, contractors, and seasonal review.",
  },
  {
    icon: ShieldCheck,
    title: "Built for mobile",
    text: "Designed for iPhone and iPad so vineyard information is available where the work actually happens.",
  },
];

const benefits = [
  "Capture issues the moment they are seen",
  "Reduce missed jobs and forgotten follow-up",
  "Track costs across chemical, fuel, labour, and maintenance",
  "Use built-in tools like yield estimation and work task calculation",
  "Share clearer records with staff, contractors, and managers",
  "Replace scattered notes with one mobile workflow",
];

const trustPoints = [
  "Built specifically for vineyard workflow",
  "Made for iPhone and iPad use in the field",
  "Costing across chemical, fuel, labour, and maintenance",
  "Practical vineyard tools including yield estimation and work task calculation",
];

const screenshots = [
  {
    title: "Summary dashboard",
    subtitle: "See key vineyard information at a glance.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/01_summary_page.png",
  },
  {
    title: "Vineyard and block details",
    subtitle: "Organise vineyards and access block-level information quickly.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/01_vineyard_details.png",
  },
  {
    title: "Repairs and issue pins",
    subtitle: "Capture maintenance jobs when they are actually seen.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/02_repairs.png",
  },
  {
    title: "Growth stage records",
    subtitle: "Track E-L development through the season.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/03_growth.png",
  },
  {
    title: "Pins and observations",
    subtitle: "Log observations and follow-up tasks in the field.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/04_pins.png",
  },
  {
    title: "Yield estimate tools",
    subtitle: "Keep practical vineyard calculations close at hand.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/05_yield_estimate.png",
  },
  {
    title: "Spray program reporting",
    subtitle: "Export clearer records for planning and compliance.",
    image: "https://raw.githubusercontent.com/stockmansridge/rork-vine-track/main/screenshots/iphone/en/06_spray_program.png",
  },
];

const workflow = [
  {
    title: "Set up vineyards and blocks",
    text: "Organise your property structure so teams can record work against the right vineyard areas.",
  },
  {
    title: "Log jobs and observations in the field",
    text: "Record pins, repairs, growth stages, and activity as the work happens rather than later from memory.",
  },
  {
    title: "Export and follow up",
    text: "Turn practical field notes into useful records and reports for managers, teams, and compliance needs.",
  },
];

const faqs = [
  {
    q: "Who is VineTrack for?",
    a: "VineTrack is built for growers, vineyard managers, tractor operators, and vineyard teams who want practical field records without unnecessary software complexity.",
  },
  {
    q: "What devices does it support?",
    a: "VineTrack is designed for iPhone and iPad so teams can use it where the work actually happens rather than relying on notes taken back in the office.",
  },
  {
    q: "What can I record in the app?",
    a: "You can use VineTrack for issue pins, repair logging, growth stage records, vineyard observations, spray program records, and practical vineyard calculations such as yield-related tools.",
  },
  {
    q: "Can I export records?",
    a: "Yes. VineTrack is built to turn field activity into clearer records that can be exported and used for follow-up, team communication, planning, and reporting.",
  },
  {
    q: "Is it made for general farming?",
    a: "No. VineTrack is designed specifically around vineyard workflow, terminology, and practical use in blocks and rows.",
  },
  {
    q: "How do I get started?",
    a: "Download the app, set up your vineyard structure, and start recording work in the field. The trial period gives you time to see how it fits your operation before moving to a paid plan.",
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function ScreenshotCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
        <img src={image} alt={title} className="h-auto w-full object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{subtitle}</p>
    </div>
  );
}

function AppStoreBadge({ className = "h-14 w-auto" }: { className?: string }) {
  return <img src={APP_STORE_BADGE} alt="Download on the App Store" className={className} />;
}

function Footer({ onNavigate }: { onNavigate: (page: "home" | "privacy", sectionId?: string) => void }) {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>© 2026 VineTrack. Built for practical vineyard work.</div>
        <div className="flex flex-wrap items-center gap-5">
          <button onClick={() => onNavigate("home", "features")} className="transition hover:text-white">Features</button>
          <button onClick={() => onNavigate("home", "pricing")} className="transition hover:text-white">Pricing</button>
          <button onClick={() => onNavigate("home", "faq")} className="transition hover:text-white">FAQ</button>
          <button onClick={() => onNavigate("privacy")} className="transition hover:text-white">Privacy & Terms</button>
          <a href="mailto:hello@stockmansridge.com.au" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function PrivacyPage({ onNavigate }: { onNavigate: (page: "home" | "privacy", sectionId?: string) => void }) {
  const sections = useMemo(
    () => [
      {
        title: "Overview",
        body: [
          "VineTrack is a vineyard field operations app built to help growers and vineyard teams record work in the field, organise observations, and generate practical records.",
          "This page combines the Privacy Policy and Terms of Use for the app so users can find the key information in one place.",
          "Last updated: 17 April 2026.",
        ],
      },
      {
        title: "Information we collect",
        body: [
          "Depending on how you use the app, VineTrack may collect account information such as your name, email address, and subscription status.",
          "The app may also collect vineyard-related content you create, including vineyard names, block names, pins, observations, spray records, growth stage entries, and related notes.",
          "Where you choose to use location-based features, the app may process location information to help place vineyard records accurately in the field.",
          "If you attach photos to records, those images may also be stored as part of your app data.",
        ],
      },
      {
        title: "How we use information",
        body: [
          "We use information to operate the app, support your account, sync your data where relevant, provide subscription access, improve app reliability, and respond to support requests.",
          "We also use vineyard records and related operational data to provide the core functionality of the app, including pins, reports, calculations, and field workflows.",
        ],
      },
      {
        title: "Data storage and security",
        body: [
          "We take reasonable steps to protect your information and app data from unauthorised access, misuse, or disclosure.",
          "No method of electronic storage or transmission is completely secure, so we cannot guarantee absolute security, but we aim to use appropriate technical and organisational safeguards.",
        ],
      },
      {
        title: "Subscriptions and billing",
        body: [
          "VineTrack may offer a trial period followed by paid subscription access.",
          "Subscription billing, renewals, and cancellations are handled through the Apple App Store and are subject to Apple’s applicable terms and billing processes.",
          "Pricing displayed in the app or on related marketing pages may change from time to time.",
        ],
      },
      {
        title: "Acceptable use",
        body: [
          "You agree to use VineTrack lawfully and in a way that does not interfere with the app, its services, or other users.",
          "You must not attempt to misuse the app, reverse engineer it unlawfully, interfere with security features, or use it in a way that breaches applicable laws or regulations.",
        ],
      },
      {
        title: "Operational guidance and records",
        body: [
          "VineTrack is designed as a practical record-keeping and workflow tool. It does not replace professional agronomic, chemical, legal, safety, or compliance advice.",
          "Users remain responsible for checking spray records, operational decisions, compliance obligations, and any field actions taken using the information recorded in the app.",
        ],
      },
      {
        title: "Your data and ownership",
        body: [
          "You retain ownership of the vineyard data and operational records you create in the app, subject to any rights needed for us to store, process, back up, and display that data as part of the service.",
          "You are responsible for ensuring you have the right to upload or store any photos, notes, or operational information you add to VineTrack.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "VineTrack may rely on third-party providers for services such as hosting, authentication, storage, analytics, subscriptions, or infrastructure.",
          "Where third-party services are used, their own terms and privacy practices may also apply.",
        ],
      },
      {
        title: "Changes",
        body: [
          "We may update this Privacy Policy and Terms of Use from time to time. Updated versions may be posted in the app, on the website, or both.",
          "Your continued use of VineTrack after changes take effect indicates acceptance of the updated terms, to the extent permitted by law.",
        ],
      },
      {
        title: "Contact",
        body: [
          "If you have questions about VineTrack, this Privacy Policy, or these Terms of Use, you can contact: hello@stockmansridge.com.au.",
        ],
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <button onClick={() => onNavigate("home")} className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to VineTrack
          </button>
          <img src={APP_ICON} alt="VineTrack" className="h-11 w-11 rounded-2xl border border-white/10" />
        </div>
      </header>

      <section className="border-b border-white/10" style={{ background: `linear-gradient(to bottom, ${BRAND.primary}, #020617)` }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
            Privacy Policy & Terms of Use
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Privacy & Terms</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This subpage is part of the VineTrack site and brings your privacy and usage terms together in one clear location.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-4 text-slate-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-8">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: "home" | "privacy", sectionId?: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 shadow-lg shadow-black/20">
              <img src={APP_ICON} alt="VineTrack app icon" className="h-11 w-11 object-cover" />
            </div>
            <div>
              <div className="text-base font-semibold">VineTrack</div>
              <div className="text-xs text-slate-400">Vineyard field operations</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#workflow" className="transition hover:text-white">How it works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377" className="transition hover:opacity-90" aria-label="Download on the App Store">
            <AppStoreBadge className="h-11 w-auto" />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10" style={{ background: `radial-gradient(circle at top left, rgba(200,145,58,0.16), transparent 26%), radial-gradient(circle at top right, rgba(122,78,45,0.22), transparent 24%), linear-gradient(to bottom, ${BRAND.primary}, #020617)` }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-0 top-44 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
              Built by vignerons for vignerons
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Modern vineyard software built for real field work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              VineTrack helps vineyard teams record repairs, spray activity, E-L growth stages, observations, costs, and block-level work in one practical mobile workflow built for use in the field.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377" className="transition hover:opacity-90" aria-label="Download on the App Store">
                <AppStoreBadge className="h-14 w-auto" />
              </a>
              <a href="#screenshots" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                See how it works
              </a>
            </div>

            <div className="mt-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
              Built by vignerons for vignerons
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-semibold">In-field</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Designed around vineyard workflow, not office-first software.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-semibold">Cost-aware</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Track chemical, fuel, labour, and maintenance in a more practical way.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-semibold">Tool-ready</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Use yield estimation, work task calculation, and practical vineyard tools in the field.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] blur-3xl" style={{ backgroundColor: "rgba(200,145,58,0.10)" }} />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <img src={APP_ICON} alt="VineTrack app icon" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <img src={screenshots[0].image} alt={screenshots[0].title} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3">
          {benefits.slice(0, 3).map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Check className="mt-0.5 h-5 w-5 text-emerald-300" />
              <p className="text-sm leading-6 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Product experience" title="See the actual VineTrack product experience." text="These screens should do the heavy lifting on the page by showing visitors that VineTrack is a real vineyard tool with practical workflows, not just a concept." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((screen) => (
            <ScreenshotCard key={screen.title} title={screen.title} subtitle={screen.subtitle} image={screen.image} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Highlights" title="The practical vineyard tools teams actually need." text="VineTrack brings together field records, costing visibility, and useful vineyard tools so the app supports both the work itself and the decisions around it." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <DollarSign className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Costing</h3>
            <p className="mt-3 leading-7 text-slate-300">Keep a clearer view of vineyard costs across chemical, fuel, labour, and maintenance so the real cost of work is easier to understand.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {[
                "Chemical costing",
                "Fuel costing",
                "Labour costing",
                "Maintenance costing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Check className="h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Vineyard tools</h3>
            <p className="mt-3 leading-7 text-slate-300">Use the app for more than record keeping with practical tools that support planning, estimating, and day-to-day field decisions.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {[
                "Yield estimation",
                "Maintenance logging",
                "Work task calculator",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Check className="h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Core features" title="Built around the work vineyard teams actually do." text="VineTrack is designed to help record, organise, and follow up on the jobs, observations, and reporting requirements that come up across the season." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="How it works" title="Simple to adopt. Practical in the field. Useful afterwards." text="The workflow is straightforward: set up your vineyard structure, record work as it happens, then use the records and exports for follow-up and reporting." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workflow.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sm font-semibold text-white">0{index + 1}</div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(to_bottom,_rgba(16,185,129,0.06),_rgba(15,23,42,0.1))]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Why teams use it</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Clean records. Faster decisions.</h3>
            <p className="mt-5 text-base leading-8 text-slate-300">Vineyard issues are often spotted in the moment and forgotten later. VineTrack helps capture them immediately and turn that information into useful action, reporting, and seasonal knowledge.</p>
            <div className="mt-8 grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">{benefit}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Reporting and follow-up</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Useful after the day’s work is done.</h3>
            <p className="mt-5 leading-8 text-slate-300">Turn field observations into practical reports and records that support communication, contractor handover, and seasonal review.</p>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm text-slate-400">Export preview</div>
                  <div className="mt-1 text-lg font-semibold">Spray Program Report</div>
                </div>
                <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">Reporting workflow</div>
              </div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Included detail</div>
                  <div className="mt-3 grid gap-3 text-sm text-slate-300">
                    {[
                      "Block and activity date",
                      "Product, rate, and operator details",
                      "Clearer seasonal record keeping",
                      "Useful team communication and follow-up",
                    ].map((line) => (
                      <div key={line} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                        <CircleDot className="h-4 w-4 text-emerald-300" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Pricing" title="Simple pricing for ongoing vineyard use." text="Keep the offer easy to understand: a free trial to get started, then straightforward monthly or annual pricing." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Current offer</p>
            <div className="mt-4 text-4xl font-semibold">Free for 3 months</div>
            <p className="mt-4 leading-8 text-slate-300">Give vineyard teams time to trial the workflow in the field before moving to a paid plan.</p>
            <a href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377" className="mt-8 inline-block transition hover:opacity-90" aria-label="Download on the App Store">
              <AppStoreBadge className="h-14 w-auto" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Monthly</p>
              <div className="mt-4 text-4xl font-semibold">$9.99</div>
              <p className="mt-2 text-slate-400">per device / per month</p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-300" />Full app access</div>
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-300" />Field logging and records</div>
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-300" />Reporting workflow</div>
              </div>
            </div>
            <div className="rounded-[2rem] border p-8 ring-1" style={{ borderColor: "rgba(200,145,58,0.22)", backgroundColor: "rgba(200,145,58,0.12)", boxShadow: "inset 0 0 0 1px rgba(200,145,58,0.08)" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Annual</p>
              <div className="mt-4 text-4xl font-semibold text-white">$99.99</div>
              <p className="mt-2 text-emerald-100/80">per device / per year</p>
              <div className="mt-6 space-y-3 text-sm text-emerald-50">
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-200" />Best value option</div>
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-200" />Ongoing vineyard use</div>
                <div className="flex gap-3"><Check className="h-4 w-4 text-emerald-200" />Simple annual billing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="FAQ" title="Questions a visitor is likely to ask before downloading." text="A good landing page should answer the obvious questions clearly and quickly so growers can decide whether VineTrack suits their operation." />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),_transparent_40%),rgba(255,255,255,0.04)] p-10 md:p-14">
          <img src={APP_ICON} alt="VineTrack" className="mx-auto h-16 w-16 rounded-[1.25rem] border border-white/10 shadow-lg shadow-black/20" />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">Bring modern vineyard operations into the field.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Start using VineTrack to record repairs, growth stages, spray activity, and vineyard observations directly from the field.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377" className="transition hover:opacity-90" aria-label="Download on the App Store">
              <AppStoreBadge className="h-14 w-auto" />
            </a>
            <a href="mailto:hello@stockmansridge.com.au" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Ask a question</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Free trial available, then per-device subscription pricing applies.</p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default function VineTrackSite() {
  const [page, setPage] = useState<"home" | "privacy">("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "privacy") setPage("privacy");
    else setPage("home");
  }, []);

  const handleNavigate = (nextPage: "home" | "privacy", sectionId?: string) => {
    setPage(nextPage);
    window.location.hash = nextPage === "privacy" ? "privacy" : sectionId ? sectionId : "home";

    requestAnimationFrame(() => {
      if (nextPage === "privacy") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (sectionId) {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return page === "privacy" ? <PrivacyPage onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} />;
}
