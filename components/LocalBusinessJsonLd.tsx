import { localBusiness } from "@/data/localBusiness";

// Structured data so Google can read the business name, address, phone and
// hours directly. The "<" escape keeps the JSON from closing the script tag.
export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
      }}
    />
  );
}
