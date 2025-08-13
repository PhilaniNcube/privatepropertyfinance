import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ReactNode } from "react";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value) return null;
      const url = value?.asset?._ref
        ? urlFor(value).width(800).url()
        : undefined;
      return url ? (
        <div className="my-6">
          <Image
            src={url}
            alt={value.alt || "Blog image"}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg"
          />
        </div>
      ) : null;
    },
  },
  block: {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-semibold mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="text-xl font-semibold mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="my-4 leading-7">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }: { children: ReactNode; value?: any }) => {
      const href = value?.href;
      return (
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc ml-6 my-4 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <li className="leading-7">{children}</li>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
