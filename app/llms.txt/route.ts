import { SITE } from "@/lib/content/site";
import { SERVICES } from "@/lib/content/services";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { TEAM } from "@/lib/content/team";

export const dynamic = "force-static";

export async function GET() {
  const activeTeam = TEAM.filter((m) => m.includeInPersonSchema !== false);

  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} (${SITE.legalName}, Companies House No. ${SITE.companyNumber}, ICO Reg. ${SITE.icoNumber}) is an independent, founder-led UK property finance brokerage arranging non-regulated property finance from £100,000 to £20 million across the United Kingdom for UK and international property investors, expats, developers, and trading businesses.`,
    "",
    "## Key Facts & Contact",
    "",
    `- **Website**: ${SITE.url}`,
    `- **Facility Range**: £100,000 to £20,000,000`,
    `- **Property Location**: England, Wales, Scotland, and Northern Ireland (United Kingdom)`,
    `- **Client Residency Accepted**: UK residents, UK expats, and foreign nationals / non-UK residents worldwide (including Hong Kong, Singapore, UAE / Dubai, Nigeria, Malaysia, Kuwait, China, US, Europe, and offshore/UK SPV structures)`,
    `- **Main Office (Manchester)**: ${SITE.manchester.lines.join(", ")}`,
    `- **London Presence**: ${SITE.london.lines.join(", ")} (${SITE.london.note})`,
    `- **International Client Support**: Dubai-based International Business Development Manager supporting overseas investors across time zones`,
    `- **Telephone**: ${SITE.phone} (${SITE.phoneHref})`,
    `- **WhatsApp / Mobile**: ${SITE.mobile} (${SITE.whatsappHref})`,
    `- **Email**: ${SITE.email}`,
    `- **Opening Hours**: ${SITE.hours}`,
    `- **Full Knowledge Corpus**: ${SITE.url}/llms-full.txt`,
    "",
    "## Core Property Finance Services",
    "",
    ...SERVICES.map(
      (service) =>
        `- [${service.name}](${SITE.url}/${service.slug}): ${service.metaDescription}`
    ),
    "",
    "## Completed Transactions & Case Studies",
    "",
    `- [Completed Transactions Overview](${SITE.url}/case-studies): Real-world examples of commercial, bridging, development, and foreign national buy-to-let finance arranged by ${SITE.name}.`,
    ...CASE_STUDIES.map(
      (study) =>
        `  - **${study.headline}** (${study.amount}, ${study.ltv}, ${study.location}): ${study.outcome}`
    ),
    "",
    "## Company & Team Pages",
    "",
    `- [About Us](${SITE.url}/about-us): Founder-led brokerage with 20+ years of bank and specialist-lender relationship management and credit committee experience.`,
    `- [Meet the Team](${SITE.url}/team): ${activeTeam
      .map((m) => `${m.name} (${m.role}${m.location ? `, ${m.location}` : ""})`)
      .join("; ")}.`,
    `- [Contact & Online Deal Enquiry](${SITE.url}/contact-us): Interactive deal calculator and direct broker contact.`,
    "",
    "## Regulatory Notice",
    "",
    `${SITE.legalStatement} ${SITE.riskWarning}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
