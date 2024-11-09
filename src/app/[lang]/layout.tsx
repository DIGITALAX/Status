import "./../../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIGITALAX Status",
  description: "Live Status of Apps.",
  twitter: {
    card: "summary_large_image",
    site: "@digitalax_",
    title: "DIGITALAX Status",
    description: "Live Status of Apps.",
    images: ["https://status.digitalax.xyz/card.png/"],
  },
  openGraph: {
    title: "DIGITALAX Status",
    description: "Live Status of Apps.",
    images: "https://status.digitalax/card.png/",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
