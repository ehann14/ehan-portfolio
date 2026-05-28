import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import AdminSecretButton from "@/components/ui/AdminSecretButton";

export const metadata: Metadata = {
  title: "Ehann",
  description:
    "Portfolio Ehan — Full Stack Web Developer specializing in Next.js, Laravel, and modern UI. Building elegant, performant, and user-friendly web experiences.",
  keywords: [
    "Ehan",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "Laravel",
    "Frontend Developer",
    "UI Designer",
    "Bandung",
  ],
  authors: [{ name: "Muhamad Ferhan" }],
  creator: "Muhamad Ferhan",
  openGraph: {
    type: "website",
    title: "Muhammad Ferhan Pratama Sodikin - Portfolio",
    description: "Full Stack Web Developer & UI Designer",
    siteName: "Ehan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehan Portfolio",
    description: "Full Stack Web Developer & UI Designer",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/F.jpeg",
    apple: "/images/F.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <AdminSecretButton />
        </Providers>
      </body>
    </html>
  );
}
