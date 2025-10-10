import "@/app/globals.css";
import { userAgent } from "next/server";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Raymond Yang - Full-Stack + Security",
  authors: [
    {
      name: "Raymond Yang"
    }
  ],
  creator: "Raymond Yang",
  description: "Raymond Yang | DevOps Engineer, Security Engineer, Full-Stack Developer",
  keywords: ["Raymond Yang", "DevOps", "Infra", "Full Stack", "Rust", "Terraform", "AWS", "Backend", "Kubernetes", "Security"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

let a = []

const avenirNext = localFont({
  src: "./fonts/AvenirNextLTPro-Regular.otf",
  display: "swap",
})

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
