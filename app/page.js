import fs from "node:fs/promises";
import path from "node:path";
import Script from "next/script";

export default async function Page() {
  const html = await fs.readFile(
    path.join(process.cwd(), "app", "body.html"),
    "utf8"
  );
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/trivia.js" strategy="afterInteractive" />
    </>
  );
}
