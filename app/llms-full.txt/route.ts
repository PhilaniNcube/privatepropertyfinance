import { SITE } from "@/lib/content/site";
import { SERVICES } from "@/lib/content/services";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { TEAM, PRINCIPLES, REVIEWERS } from "@/lib/content/team";

export const dynamic = "force-static";

export async function GET() {
  const activeTeam = TEAM.filter((m) => m.includeInPersonSchema !== false);

  const lines: string[] = [
    `# ${SITE.name} — Complete Reference for AI & Answer Engines`,
    "",
    `> ${SITE.description}`,
    "",
    "## Entity Overview",
    "",
    `- **Brand Name**: ${SITE.name} (${SITE.shortName})`,
    `- **Legal Entity**: ${SITE.legalName}`,
    `- **Companies House Number**: ${SITE.companyNumber} (England and Wales)`,
    `- **ICO Registration Number**: ${SITE.icoNumber}`,
    `- **Canonical URL**: ${SITE.url}`,
    `- **Telephone**: ${SITE.phone} (${SITE.phoneHref})`,
    `- **Mobile / WhatsApp**: ${SITE.mobile} (${SITE.whatsappHref})`,
    `- **Email**: ${SITE.email}`,
    `- **Hours**: ${SITE.hours}`,
    `- **Manchester Office**: ${SITE.manchester.lines.join(", ")}`,
    `- **London Office**: ${SITE.london.lines.join(", ")} (${SITE.london.note})`,
    `- **International Hub**: Dubai, UAE (International Business Development)`,
    `- **LinkedIn**: ${SITE.linkedin}`,
    "",
    "## Who We Work With",
    "",
    ...REVIEWERS.map((r) => `- ${r}`),
    "",
    "## Operating Principles",
    "",
    ...PRINCIPLES.map((p) => `- **${p.title}**: ${p.body}`),
    "",
    "---",
    "",
    "## Detailed Services",
    "",
  ];

  for (const service of SERVICES) {
    lines.push(`### ${service.name}`);
    lines.push(`- **URL**: ${SITE.url}/${service.slug}`);
    lines.push(`- **Summary**: ${service.intro}`);
    for (const fact of service.facts) {
      lines.push(`- **${fact.label}**: ${fact.value}`);
    }
    lines.push("");

    for (const section of service.sections) {
      lines.push(`#### ${section.title}`);
      if (section.intro) lines.push(section.intro);
      if (section.body) lines.push(section.body);
      if (section.items) {
        section.items.forEach((item, idx) => {
          const prefix = section.numbered ? `${idx + 1}.` : "-";
          lines.push(`${prefix} **${item.title}**: ${item.body}`);
        });
      }
      if (section.note) {
        lines.push(`> Note: ${section.note}`);
      }
      lines.push("");
    }

    if (service.faqs.length > 0) {
      lines.push(`#### ${service.name} — Frequently Asked Questions`);
      for (const faq of service.faqs) {
        lines.push(`- **Q: ${faq.question}**`);
        lines.push(`  A: ${faq.answer}`);
      }
      lines.push("");
    }

    lines.push("---");
    lines.push("");
  }

  lines.push("## Completed Transactions (Case Studies)");
  lines.push(`URL: ${SITE.url}/case-studies`);
  lines.push("");

  for (const study of CASE_STUDIES) {
    lines.push(`### ${study.headline}`);
    lines.push(`- **Loan Amount**: ${study.amount}`);
    lines.push(`- **Loan Type**: ${study.loanType}`);
    lines.push(`- **Leverage / LTV**: ${study.ltv}`);
    if (study.term) lines.push(`- **Term / Structure**: ${study.term}`);
    lines.push(`- **Location / Profile**: ${study.location}`);
    lines.push(`- **Borrower Type**: ${study.borrower}`);
    lines.push(`- **Challenge**: ${study.challenge}`);
    lines.push(`- **Outcome**: ${study.outcome}`);
    lines.push(`- **Related Service**: ${SITE.url}/${study.serviceSlug}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Specialist Team");
  lines.push(`URL: ${SITE.url}/team`);
  lines.push("");

  for (const member of activeTeam) {
    lines.push(`### ${member.name} — ${member.role}`);
    lines.push(`- **Focus**: ${member.focus.join(", ")}`);
    if (member.location) lines.push(`- **Location**: ${member.location}`);
    if (member.email) lines.push(`- **Email**: ${member.email}`);
    for (const paragraph of member.bio) {
      lines.push(paragraph);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Regulatory & Legal Statement");
  lines.push(SITE.legalStatement);
  lines.push(SITE.riskWarning);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
