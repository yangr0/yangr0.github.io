import "@/app/globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

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
