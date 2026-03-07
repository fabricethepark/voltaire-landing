export const copy = {
  nav: {
    logo: "VOLTAIRE",
    links: [
      { label: "OS", href: "/os" },
      { label: "Local", href: "/local" },
      { label: "Studio", href: "/studio" },
      { label: "Letter", href: "/letter" },
    ],
    cta: "Talk to an agent",
  },
  hero: {
    eyebrow: "AI-NATIVE VENTURE STUDIO",
    headline: "The org chart is dead.",
    sub: "Six agents run Voltaire. One human makes decisions 20 minutes a day. This is what a company looks like when AI handles operations.",
    ctaPrimary: { label: "See how it works", href: "/os" },
  },
  stats: {
    mrr: 4280,
    agentCount: 6,
    clientCount: 12,
    weeklyActions: 847,
  },
  productLines: [
    {
      name: "Voltaire OS",
      description:
        "The agent suite. White-label it to your agency or run it yourself.",
      href: "/os",
      icon: "cpu",
    },
    {
      name: "Voltaire Local",
      description: "AI-run services for local businesses. We handle digital. You handle the craft.",
      href: "/local",
      icon: "map",
    },
    {
      name: "Voltaire Studio",
      description:
        "Self-serve guides and templates. Instant download. Built from what worked.",
      href: "/studio",
      icon: "package",
    },
  ],
  agentLogs: [
    { agent: "SCOUT", action: "Scraped 42 Google Maps listings in Paris 11e", outcome: "success" as const, time: "2 min ago" },
    { agent: "NARRATE", action: "Generated landing page copy for Boulangerie Moreau", outcome: "success" as const, time: "5 min ago" },
    { agent: "CLOSE", action: "Sent follow-up SMS to 8 warm leads", outcome: "success" as const, time: "8 min ago" },
    { agent: "PRICE", action: "Optimized checkout flow for KeepMore client", outcome: "success" as const, time: "11 min ago" },
    { agent: "BUILD", action: "Deployed site update for Le Petit Cafe", outcome: "success" as const, time: "15 min ago" },
    { agent: "LEARN", action: "Analyzing conversion data from last 7 days", outcome: "pending" as const, time: "20 min ago" },
    { agent: "SCOUT", action: "Identified 15 restaurants without websites in Marais", outcome: "success" as const, time: "25 min ago" },
    { agent: "NARRATE", action: "Published Voltaire Letter issue #4", outcome: "success" as const, time: "30 min ago" },
    { agent: "CLOSE", action: "Converted trial to paid: Studio Photography Paris", outcome: "success" as const, time: "35 min ago" },
    { agent: "BUILD", action: "Generated SiteScout report for 3 new prospects", outcome: "success" as const, time: "40 min ago" },
  ],
  agents: [
    { name: "SCOUT", role: "Finds prospects", metric: "Leads discovered / week", description: "Scrapes Google Maps, directories, and social feeds. Identifies businesses with weak or missing web presence. Builds prospect lists with contact data." },
    { name: "NARRATE", role: "Writes everything", metric: "Content pieces / week", description: "Landing pages, email sequences, blog posts, ad copy. Writes in the client's voice. Publishes the Voltaire Letter." },
    { name: "CLOSE", role: "Converts leads", metric: "Conversion rate", description: "Sends outreach sequences, follow-ups, and onboarding flows. Handles SMS and email. Knows when to push and when to wait." },
    { name: "PRICE", role: "Optimizes revenue", metric: "Revenue / client / day", description: "A/B tests checkout flows, pricing pages, and upsell sequences. Runs the KeepMore Stripe fee optimizer." },
    { name: "BUILD", role: "Ships products", metric: "Sites deployed / week", description: "Deploys websites, landing pages, and tools. Full-stack. Handles SiteScout audits and rebuilds." },
    { name: "LEARN", role: "Analyzes everything", metric: "Insights surfaced / week", description: "Monitors performance data across all clients. Spots anomalies, suggests optimizations, feeds learnings back to other agents." },
  ],
  pricing: {
    tiers: [
      { name: "Solo", price: 99, agents: ["SCOUT"], features: ["1 agent", "Basic reporting", "Email support"] },
      { name: "Dual", price: 149, agents: ["SCOUT", "NARRATE"], features: ["2 agents", "Content generation", "Priority support"] },
      { name: "Full Suite", price: 499, agents: ["SCOUT", "NARRATE", "CLOSE", "PRICE", "BUILD", "LEARN"], features: ["All 6 agents", "White-label option", "Custom SOUL.md", "Dedicated LEARN loop", "Slack integration"] },
    ],
  },
  localProducts: [
    { name: "SiteScout Audit", price: "Free", description: "AI grades your web presence A through D. Instant results." },
    { name: "90-Second Site", price: "€599", description: "We rebuild your site in 48 hours. Mobile-first. SEO-ready." },
    { name: "Local SEO Setup", price: "€299", description: "Google Business Profile optimization. Maps ranking. Review strategy." },
    { name: "Social Autopilot", price: "€199/mo", description: "3 posts per week. On-brand. Scheduled and published automatically." },
    { name: "KeepMore", price: "€99/mo", description: "Cut your Stripe fees from 2.9% to 0.8%. Takes 20 minutes to set up." },
  ],
  studioProducts: [
    { name: "SOUL.md Template Pack", format: "PDF", price: "€29", href: "#", description: "Agent identity files for 6 roles. Copy, customize, deploy." },
    { name: "KeepMore Kit", format: "Template", price: "€49", href: "#", description: "Complete Stripe optimization playbook with implementation guide." },
    { name: "AI Ops Playbook", format: "PDF", price: "€79", href: "#", description: "How Voltaire runs itself. Memory architecture, agent workflows, decision protocols." },
    { name: "SiteScout Checklist", format: "PDF", price: "€19", href: "#", description: "The 47-point audit we run on every local business site." },
    { name: "Agency White-Label Guide", format: "PDF", price: "€99", href: "#", description: "How to resell Voltaire OS under your own brand. Pricing strategy included." },
    { name: "ClawMart Skill: Lead Scraper", format: "ClawMart Skill", price: "€39", href: "#", description: "Drop-in automation. Scrapes local business data from Google Maps." },
  ],
  letter: {
    eyebrow: "THE VOLTAIRE LETTER",
    headline: "Intelligence dispatches from the network.",
    sub: "What we learned running a company on six AI agents. One issue, every week. No noise.",
    issues: [
      { number: "04", date: "Mar 2026", title: "Why we replaced our sales team with a single agent", excerpt: "CLOSE has now handled 847 outreach sequences. Here is what it does differently from a human SDR — and where it still fails." },
      { number: "03", date: "Feb 2026", title: "The memory architecture that makes agents compound", excerpt: "Context windows forget. LEARN remembers. How we built a persistent knowledge layer that gets smarter every week." },
      { number: "02", date: "Feb 2026", title: "Six agents, one SOUL.md per agent", excerpt: "Identity files are not prompts. They are constitutions. What we put in them and why it changed everything." },
      { number: "01", date: "Jan 2026", title: "Building the company before building the product", excerpt: "We shipped the operating system before the revenue. Here is why that was the right order." },
    ],
  },
  footer: {
    left: "Voltaire — Paris, 2026",
    right: "Built by agents. Directed by humans.",
  },
};
