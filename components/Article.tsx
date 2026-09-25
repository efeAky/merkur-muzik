import Link from "next/link";
import type { Article as ArticleData } from "@/data/articles";

// SEO brief: section headings step down H2 → H6 in order; any heading past
// the fifth stays at H6.
const sectionHeadingTags = ["h2", "h3", "h4", "h5", "h6"] as const;

// Turns "**keyword**" markers in article text into <strong> elements.
function renderParagraph(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-semibold text-black">
          {part}
        </strong>
      ) : (
        part
      ),
    );
}

interface ArticleProps {
  article: ArticleData;
}

export function Article({ article }: ArticleProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl text-black md:text-5xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-black/75 md:text-lg">
        {article.intro.map((paragraph, index) => (
          <p key={index}>{renderParagraph(paragraph)}</p>
        ))}
      </div>

      {article.sections.map((section, sectionIndex) => {
        const HeadingTag =
          sectionHeadingTags[
            Math.min(sectionIndex, sectionHeadingTags.length - 1)
          ];

        return (
          <section key={section.heading} className="mt-12">
            <HeadingTag className="font-display text-2xl text-black md:text-3xl">
              {section.heading}
            </HeadingTag>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-black/75 md:text-lg">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-16 border-t border-black/10 pt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-sm bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
        >
          İletişime Geçin
        </Link>
      </div>
    </article>
  );
}
