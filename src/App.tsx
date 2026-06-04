import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function IconBase({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </IconBase>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8" />
      <path d="M8 10h2" />
      <path d="M14 10h2" />
      <path d="M8 14h2" />
      <path d="M14 14h2" />
      <path d="M8 18h8" />
    </IconBase>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
}

function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 11h6" />
      <path d="M9 16h6" />
      <path d="M9 8h.01" />
      <path d="M9 13h.01" />
    </IconBase>
  );
}

function DollarSignIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
    </IconBase>
  );
}

function FileSpreadsheetIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
      <path d="M10 9v12" />
      <path d="M14 9v12" />
    </IconBase>
  );
}

function GrapeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="8" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="12" cy="16" r="2" />
      <path d="M12 6c0-2 1-3 3-4" />
    </IconBase>
  );
}

function MapPinnedIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function TractorIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="16" r="4" />
      <path d="M10 17h3" />
      <path d="M13 8h4l2 4" />
      <path d="M5 13h8V8H8l-1-3H4" />
    </IconBase>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-3-3 2.4-2.4Z" />
    </IconBase>
  );
}

function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#FFFFFF" }}>Vine</span>
      <span style={{ color: "#85B830" }}>Track</span>
    </div>
  );
}

const APP_ICON =
  "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/ios/VineTrack/Assets.xcassets/AppIcon.appiconset/icon.png";
const HERO_SCREENSHOT =
  "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/01_summary_page.png";
const APP_STORE_BADGE =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const PORTAL_URL = "https://portal.vinetrack.com.au";
const PORTAL_SCREENSHOT = "/portal/portal-overview.png";

type Feature = {
  icon: ({ className }: { className?: string }) => React.ReactElement;
  title: string;
  text: string;
};

type GearItem = {
  title: string;
  brand: string;
  image: string;
  alt: string;
  summary: string;
  bullets: string[];
  cta: string;
  href: string;
};

const platformStats = [
  {
    value: "1000+",
    unit: "ha",
    label: "Under management",
  },
  {
    value: "45",
    unit: "",
    label: "Vineyards",
  },
  {
    value: "23.6",
    unit: "ha",
    label: "Average ha per vineyard",
  },
];

const features: Feature[] = [
  {
    icon: MapPinnedIcon,
    title: "Field issue logging",
    text: "Drop pins for repairs, observations, maintenance jobs, and block notes while moving through the vineyard.",
  },
  {
    icon: ClipboardListIcon,
    title: "Spray program records",
    text: "Keep practical spray records and export reports for compliance, planning, and team communication.",
  },
  {
    icon: DollarSignIcon,
    title: "Costing insights",
    text: "Track vineyard costs across chemical, fuel, labour, and maintenance so day-to-day work is easier to understand financially.",
  },
  {
    icon: CalculatorIcon,
    title: "Yield calculator",
    text: "Use the updated yield calculator with practical vineyard inputs, pruning options, and clearer result displays.",
  },
  {
    icon: CalculatorIcon,
    title: "Shared weather station data",
    text: "Connect a Davis station once and share local weather data, rainfall, and setup visibility across the whole vineyard team.",
  },
  {
    icon: WrenchIcon,
    title: "Maintenance logging",
    text: "Record vineyard repairs, maintenance items, and follow-up jobs in one place so nothing gets missed.",
  },
  {
    icon: GrapeIcon,
    title: "Rainfall and weather insight",
    text: "Use the Rainfall Calendar, clearer rainfall summaries, and better weather source transparency to understand local conditions more confidently.",
  },
  {
    icon: MapPinnedIcon,
    title: "Smarter vineyard maps",
    text: "Use full-screen mapping, better map styling guidance, and improved visibility across shared vineyard data and equipment.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Data health and syncing",
    text: "Benefit from stronger record syncing, better cross-device consistency, and clearer handling of shared vineyard information.",
  },
  {
    icon: FileSpreadsheetIcon,
    title: "Report exports",
    text: "Export useful records for vineyard teams, managers, contractors, and seasonal review.",
  },
  {
    icon: TractorIcon,
    title: "Built for mobile field work",
    text: "Designed for iPhone and iPad so vineyard information is available where the work actually happens.",
  },
];

const trustPoints = [
  "Built specifically for vineyard workflow",
  "Made for iPhone and iPad use in the field",
  "Shared Davis weather data and rainfall tools for the whole vineyard team",
  "Latest tools include stronger syncing, weather transparency, and smarter vineyard maps",
];

const screenshots = [
  {
    title: "Summary dashboard",
    subtitle: "See key vineyard information at a glance.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/01_summary_page.png",
  },
  {
    title: "Repairs and issue pins",
    subtitle: "Capture maintenance jobs when they are actually seen.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/02_repairs.png",
  },
  {
    title: "Growth stage records",
    subtitle: "Track E-L development through the season.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/03_growth.png",
  },
  {
    title: "Pins and observations",
    subtitle: "Log observations and follow-up tasks in the field.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/04_pins.png",
  },
  {
    title: "Yield estimate tools",
    subtitle: "Keep practical vineyard calculations close at hand.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/05_yield_estimate.png",
  },
  {
    title: "Spray program reporting",
    subtitle: "Export clearer records for planning and compliance.",
    image:
      "https://cdn.jsdelivr.net/gh/stockmansridge/rork-vine-track@main/screenshots/iphone/en/06_spray_program.png",
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
    title: "Share data and follow up",
    text: "Use shared weather, synced records, and exported reports to keep the whole vineyard team working from the same information.",
  },
];

const recommendedGear: GearItem[] = [
  {
    title: "Secure device mounting",
    brand: "Quad Lock",
    image: "/gear/quadlock-tractor-growth.png",
    alt: "Phone securely mounted inside a tractor between vineyard rows using VineTrack",
    summary:
      "A secure phone or iPad mini mounting setup makes VineTrack far more practical in the tractor, especially when logging jobs, following rows, and using maps in the field.",
    bullets: [
      "Strong option for tractor and ute use",
      "Useful for iPhone and iPad mini setups",
      "Helps keep the screen visible and accessible while working",
    ],
    cta: "Explore mounting options",
    href: "https://www.quadlockcase.com.au/",
  },
  {
    title: "Local weather data",
    brand: "Davis",
    image: "/gear/davis-weather-station-vineyard.png",
    alt: "Davis weather station installed in a vineyard",
    summary:
      "A solid weather station helps build more localised vineyard insight and can support decisions around disease pressure, spray timing, rainfall tracking, and seasonal conditions.",
    bullets: [
      "Trusted weather station brand",
      "Useful for hyperlocal vineyard conditions",
      "Supports a stronger decision-making setup around VineTrack",
    ],
    cta: "Explore weather station options",
    href: "https://www.davisinstruments.com/",
  },
  {
    title: "Pro GPS / GNSS accuracy",
    brand: "Bad Elf Flex Mini / Flex Mini Extreme",
    image: "/gear/bad-elf-flex-mini-vineyard.png",
    alt: "External GNSS receiver used with VineTrack in a vineyard",
    summary:
      "The preferred pro-accuracy direction for VineTrack users who want stronger row confidence, better block setup, more accurate pins, and a hardware pathway toward RTK-grade vineyard mapping.",
    bullets: [
      "Best fit for VineTrack row and path intelligence",
      "Suited to location troubleshooting and block setup",
      "Premium option for contractors and serious vineyard teams",
    ],
    cta: "Explore Bad Elf Flex Mini",
    href: "https://bad-elf.com/pages/bad-elf-flex-mini",
  },
  {
    title: "Mid-tier external GPS",
    brand: "Dual XGPS160 SkyPro",
    image: "/gear/dual-xgps160-vineyard.png",
    alt: "External GPS receiver for improved VineTrack field tracking",
    summary:
      "A useful external GPS receiver for smoother tracking and better field reliability than phone-only GPS, especially where users want a simpler upgrade.",
    bullets: [
      "Good balance of cost and capability",
      "Useful for tractor route recording and field work",
      "Compatible-style option for users not needing RTK",
    ],
    cta: "Explore Dual XGPS160",
    href: "https://www.dualav.com/product/gps-receivers/xgps160/",
  },
  {
    title: "Budget GPS improvement",
    brand: "Garmin GLO 2",
    image: "/gear/garmin-glo-2-vineyard.png",
    alt: "Garmin external GPS receiver for improved vineyard route tracking",
    summary:
      "A straightforward external GPS option for users who mainly want a more stable GPS signal and improved route tracking without moving into survey-grade hardware.",
    bullets: [
      "Simple entry-level external GPS receiver",
      "Useful for general field tracking improvements",
      "Good budget option before stepping up to pro GNSS",
    ],
    cta: "Explore Garmin GLO 2",
    href: "https://www.garmin.com/en-AU/p/645104/",
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
    q: "What newer tools are included?",
    a: "Recent updates include shared Davis weather station data, Rainfall Calendar improvements, stronger syncing between devices, better rainfall summaries, and clearer weather-source transparency.",
  },
  {
    q: "Can the whole vineyard team share weather station data?",
    a: "Yes. The latest app changes are focused on sharing local weather station data, rainfall information, and related visibility across all vineyard members and devices.",
  },
];

function validateUniqueTitles(items: { title: string }[]) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.title)) {
      throw new Error(`Duplicate title detected: ${item.title}`);
    }
    seen.add(item.title);
  }
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function ScreenshotCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
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

function Footer({
  onNavigate,
}: {
  onNavigate: (page: "home" | "privacy", sectionId?: string) => void;
}) {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>© 2026 VineTrack. Built for practical vineyard work.</div>
        <div className="flex flex-wrap items-center gap-5">
          <button onClick={() => onNavigate("home", "features")} className="transition hover:text-white">
            Features
          </button>
          <button onClick={() => onNavigate("home", "platform")} className="transition hover:text-white">
            App + Portal
          </button>
          <button onClick={() => onNavigate("home", "gear")} className="transition hover:text-white">
            Gear
          </button>
          <button onClick={() => onNavigate("home", "pricing")} className="transition hover:text-white">
            Pricing
          </button>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Log in
          </a>
          <button onClick={() => onNavigate("home", "faq")} className="transition hover:text-white">
            FAQ
          </button>
          <button onClick={() => onNavigate("privacy")} className="transition hover:text-white">
            Privacy & Terms
          </button>
          <a href="mailto:vinetrack@stockmansridge.com.au" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function PrivacyPage({
  onNavigate,
}: {
  onNavigate: (page: "home" | "privacy", sectionId?: string) => void;
}) {
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
          "If you have questions about VineTrack, this Privacy Policy, or these Terms of Use, you can contact: vinetrack@stockmansridge.com.au.",
        ],
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <button
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" /> Back to VineTrack
          </button>

          <div className="flex items-center gap-3">
            <img
              src={APP_ICON}
              alt="VineTrack"
              className="h-11 w-11 rounded-2xl border border-white/10"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <LogoWordmark className="text-xl" />
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 bg-gradient-to-b from-[#263318] to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
            Privacy Policy & Terms of Use
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Privacy & Terms
          </h1>
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
                  <p key={paragraph} className="leading-8">
                    {paragraph}
                  </p>
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

function HomePage({
  onNavigate,
}: {
  onNavigate: (page: "home" | "privacy", sectionId?: string) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigate = (sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate("home", sectionId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 shadow-lg shadow-black/20">
              <img
                src={APP_ICON}
                alt="VineTrack app icon"
                className="h-11 w-11 object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <LogoWordmark className="text-xl" />
              <div className="mt-1 text-xs text-slate-400">Vineyard field operations</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#platform" className="transition hover:text-white">
              App + Portal
            </a>
            <a href="#gear" className="transition hover:text-white">
              Gear
            </a>
            <a href="#workflow" className="transition hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Log in
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377"
              className="hidden transition hover:opacity-90 md:block"
              aria-label="Download on the App Store"
            >
              <AppStoreBadge className="h-11 w-auto" />
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <button onClick={() => handleMobileNavigate("features")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                Features
              </button>
              <button onClick={() => handleMobileNavigate("platform")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                App + Portal
              </button>
              <button onClick={() => handleMobileNavigate("gear")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                Gear
              </button>
              <button onClick={() => handleMobileNavigate("workflow")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                How it works
              </button>
              <button onClick={() => handleMobileNavigate("pricing")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                Pricing
              </button>
              <button onClick={() => handleMobileNavigate("faq")} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                FAQ
              </button>

              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </a>

              <a
                href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download on the App Store
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(200,145,58,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(122,78,45,0.22),transparent_24%),linear-gradient(to_bottom,#263318,#020617)]">
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
              Modern vineyard software for the field and the office.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              VineTrack gives field teams a practical mobile app for recording work in the vineyard, while managers and owners can use the web portal to set up vineyards, review activity, and keep visibility across the operation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377"
                className="transition hover:opacity-90"
                aria-label="Download on the App Store"
              >
                <AppStoreBadge className="h-14 w-auto" />
              </a>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Open the Portal
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[rgba(200,145,58,0.10)] blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <img
                    src={APP_ICON}
                    alt="VineTrack app icon"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <img
                    src={HERO_SCREENSHOT}
                    alt={screenshots[0].title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
          <div className="grid gap-4 md:grid-cols-3">
            {platformStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur"
              >
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    {stat.value}
                  </div>
                  {stat.unit ? (
                    <div className="pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                      {stat.unit}
                    </div>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="One system"
          title="Built for the people doing the work — and the people managing it."
          text="VineTrack combines a practical mobile app for vineyard teams with a web portal for managers and owners, so setup, field recording, and oversight all work together."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <TractorIcon className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white">In the field</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Operators and field teams use the mobile app to capture work as it happens in the vineyard.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {[
                "Record repairs, observations, spray activity, and growth stages",
                "Use the app while working rows and moving through the vineyard",
                "Capture information in real time rather than later from memory",
                "Keep practical field records tied to the actual work being done",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70">
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-slate-800">
              <img
                src={PORTAL_SCREENSHOT}
                alt="VineTrack web portal overview showing vineyard map, recent trips, and manager visibility tools"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">In the office</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Managers and owners use the web portal to set up vineyards, review field activity, monitor recent work, and keep visibility across the operation.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                {[
                  "Set up vineyards, blocks, teams, tractors, and equipment",
                  "Review recent trips, map activity, pins, and operational records",
                  "Keep clearer oversight of what is happening across the vineyard",
                  "Use one portal for setup, management, reporting, and owner visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Open the Web Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Product experience"
          title="See the actual VineTrack product experience."
          text="These screens should do the heavy lifting on the page by showing visitors that VineTrack is a real vineyard tool with practical workflows, not just a concept."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((screen) => (
            <ScreenshotCard
              key={screen.title}
              title={screen.title}
              subtitle={screen.subtitle}
              image={screen.image}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Latest in VineTrack"
          title="Recent additions shaped by real vineyard use."
          text="The latest version is strongly focused on shared weather data, rainfall tracking, better syncing, and clearer visibility across the vineyard team."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {["Shared Davis weather", "Rainfall Calendar", "Weather transparency", "Cross-device syncing", "Map styling"].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-6 text-center text-sm font-medium text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <DollarSignIcon className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Costing</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Keep a clearer view of vineyard costs across chemical, fuel, labour, and maintenance so the real cost of work is easier to understand.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {["Chemical costing", "Fuel costing", "Labour costing", "Maintenance costing"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <CalculatorIcon className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Weather and vineyard tools</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Use the app for more than record keeping with practical tools that support planning, local weather visibility, and day-to-day field decisions.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {["Yield estimation", "Maintenance logging", "Rainfall Calendar"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gear" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Recommended gear"
          title="Build a setup that makes VineTrack work even better."
          text="VineTrack works with the iPhone out of the box, but the best field experience can come from pairing it with secure mounting, reliable local weather data, and optional external GPS or GNSS hardware for improved row confidence."
        />

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-100">
            Improved GPS accuracy
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-white">
            External GPS and GNSS receivers for vineyard row work.
          </h3>
          <p className="mt-3 max-w-4xl leading-7 text-slate-300">
            Vineyard rows are close together, so better GPS is not just about drawing a cleaner map line. For VineTrack, improved accuracy can help with row confidence, cleaner trip records, better pin placement, and more useful location troubleshooting.
          </p>
          <p className="mt-3 max-w-4xl leading-7 text-slate-300">
            Bad Elf Flex Mini is the preferred pro-accuracy option for VineTrack. Dual XGPS160 and Garmin GLO 2 are sensible external GPS options for users who want a simpler upgrade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recommendedGear.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-slate-800">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-100">
                  {item.brand}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.summary}</p>

                <div className="mt-6 grid gap-3 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <CheckIcon className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {item.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
          Recommended gear is included because it can genuinely improve the VineTrack workflow. Referral links can be added later with a clear disclosure where appropriate.
        </p>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="Core features"
            title="Built around the work vineyard teams actually do."
            text="VineTrack is designed to help record, organise, and follow up on the jobs, observations, weather visibility, and reporting requirements that come up across the season."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6"
                >
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
        <SectionHeading
          eyebrow="How it works"
          title="Simple to adopt. Practical in the field. Useful afterwards."
          text="The workflow is straightforward: set up your vineyard structure, record work as it happens, share weather and synced information across devices, then use the records and exports for follow-up and reporting."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workflow.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the plan that fits your vineyard."
          text="Start now on the current introductory offer, or view the new pricing structure coming from 1 July 2026."
        />

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Current introductory pricing
            </p>
            <p className="mt-2 text-sm text-slate-300">Available until 30 June 2026</p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
              <div className="grid grid-cols-2 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                <div>Introductory Plan</div>
                <div>Price</div>
              </div>

              {[
                ["VineTrack Monthly", "$9.99/month"],
                ["VineTrack Yearly", "$99/year"],
                ["Trial", "3 months free"],
              ].map(([plan, price]) => (
                <div
                  key={plan}
                  className="grid grid-cols-2 border-t border-white/10 px-4 py-3 text-sm text-slate-300"
                >
                  <div>{plan}</div>
                  <div>{price}</div>
                </div>
              ))}
            </div>

            <a
              href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377"
              className="mt-8 inline-block rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Start before 1 July
            </a>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/20 bg-slate-900/80 p-8 ring-1 ring-emerald-400/10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              New pricing from 1 July 2026
            </p>
            <p className="mt-2 text-sm text-slate-300">Includes 3 months free trial</p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
              <div className="grid grid-cols-[1.2fr_1fr_1.1fr] bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                <div>Plan</div>
                <div>Price</div>
                <div>Best for</div>
              </div>

              {[
                ["Solo", "$179.99/year via iPhone", "Owner-operators"],
                ["Team", "$799/year ex GST", "Vineyard teams"],
                ["Enterprise", "From $1,499/year ex GST", "Larger or multi-vineyard businesses"],
                ["Trial", "3 months free", "All plans"],
              ].map(([plan, price, bestFor]) => (
                <div
                  key={`${plan}-${price}`}
                  className="grid grid-cols-[1.2fr_1fr_1.1fr] border-t border-white/10 px-4 py-3 text-sm text-slate-300"
                >
                  <div>{plan}</div>
                  <div>{price}</div>
                  <div>{bestFor}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View July pricing
              </a>

              <a
                href="#pricing"
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400/15"
              >
                Join from July 1st
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions a visitor is likely to ask before downloading."
            text="A good landing page should answer the obvious questions clearly and quickly so growers can decide whether VineTrack suits their operation."
          />
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
          <img
            src={APP_ICON}
            alt="VineTrack"
            className="mx-auto h-16 w-16 rounded-[1.25rem] border border-white/10 shadow-lg shadow-black/20"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
            Bring modern vineyard operations into the field.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start using VineTrack to record repairs, growth stages, spray activity, vineyard observations, and shared local weather insights directly from the field.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/vineyard-tracker/id6761143377"
              className="transition hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <AppStoreBadge className="h-14 w-auto" />
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open the Portal
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Free trial available, then paid plans apply.
          </p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default function VineTrackSite() {
  const [page, setPage] = useState<"home" | "privacy">("home");

  useEffect(() => {
    validateUniqueTitles(features);
    validateUniqueTitles(recommendedGear);

    document.title = "VineTrack";
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = APP_ICON;

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

  return page === "privacy" ? (
    <PrivacyPage onNavigate={handleNavigate} />
  ) : (
    <HomePage onNavigate={handleNavigate} />
  );
}