import Image from "next/image";
import { MapPin } from "lucide-react";
import type { TeamMember } from "@/lib/content/team";

function Meta({ member }: { member: TeamMember }) {
  return (
    <>
      <p className="mt-3 text-xs leading-relaxed text-ink/70">
        {member.experienceSummary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {member.focus.map((focus) => (
          <span
            key={focus}
            className="rounded-[2px] border border-line bg-cream/60 px-2.5 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-ink/75"
          >
            {focus}
          </span>
        ))}
      </div>
    </>
  );
}

function Location({ member }: { member: TeamMember }) {
  if (!member.location) return null;
  return (
    <span className="inline-flex shrink-0 items-center gap-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink/60">
      <MapPin className="h-3.5 w-3.5 text-gold-ink" aria-hidden="true" />
      {member.location}
    </span>
  );
}

export function TeamFeatureCard({ member }: { member: TeamMember }) {
  return (
    <article className="grid overflow-hidden border border-line bg-white lg:grid-cols-12">
      <div className="flex flex-col justify-between gap-6 border-line bg-cream/40 p-6 sm:p-9 lg:col-span-4 lg:border-r">
        <div>
          <div className="flex items-start gap-5">
            <span
              className="grid h-20 w-20 shrink-0 place-items-center rounded-[3px] border border-[#00332E]/25 bg-[#EDF3F1] font-serif text-4xl text-navy"
              aria-hidden="true"
            >
              {member.initials}
            </span>
            <div>
              <h2 className="font-serif text-3xl text-navy">{member.name}</h2>
              <p className="mt-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
                {member.role}
              </p>
              <div className="mt-2">
                <Location member={member} />
              </div>
            </div>
          </div>
          <Meta member={member} />
        </div>
      </div>

      <div className="space-y-4 p-6 text-sm leading-relaxed text-ink/80 sm:p-9 lg:col-span-8">
        {member.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-line bg-white">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDF3F1]">
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span
              className="font-serif text-[clamp(5rem,10vw,8rem)] leading-none text-navy/75"
              aria-hidden="true"
            >
              {member.initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl text-navy sm:text-[1.7rem]">
              {member.name}
            </h2>
            <p className="mt-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              {member.role}
            </p>
          </div>
          <Location member={member} />
        </div>

        <Meta member={member} />

        <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
          {member.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
