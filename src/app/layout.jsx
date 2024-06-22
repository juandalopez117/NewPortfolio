import React from "react";
import "../app/[locale]/globals.css";
import i18nConfig from "@/app/i18nConfig";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Web Portfolio",
    template: "%s | Web Portfolio",
  },
  description:
    "Explore my portfolio to discover how I blend my passion for mathematics with my experience in data analysis. From mathematical modeling to data visualization, you'll find examples of my work in both fields here.",
  twitter: {
    card: "summary_large_image",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
