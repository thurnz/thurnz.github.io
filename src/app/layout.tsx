import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fritz D. Mauring — Frontend & Game Developer",
  description:
    "Portfolio of Fritz D. Mauring — 15+ years building web applications, interactive experiences, and games with React, TypeScript, WebGL, and Phaser.",
  keywords: [
    "Frontend Developer",
    "Game Developer",
    "React",
    "TypeScript",
    "WebGL",
    "Phaser",
    "PixiJS",
    "Philippines",
  ],
  openGraph: {
    title: "Fritz D. Mauring — Frontend & Game Developer",
    description:
      "15+ years building web applications, interactive experiences, and games.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
