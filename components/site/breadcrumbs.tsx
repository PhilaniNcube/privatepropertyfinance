import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
        <li>
          <Link href="/" className="transition-colors hover:text-navy">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            <ChevronRight className="h-3 w-3 text-ink/25" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-navy">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
