import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean Walker ~ Full Stack Developer",
  description: "A personal promo site for Dean Walker, a full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ViewTransitions>
          <div className="flex min-h-screen flex-col overflow-hidden">
            <Navbar />
            <main className="view-transition-page relative flex flex-1 flex-col">
              <div className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-zinc-400/60 scrollbar-track-zinc-200/40 scrollbar-hover:scrollbar-thumb-zinc-500/80 dark:scrollbar-thumb-zinc-500/50 dark:scrollbar-track-zinc-800/50 dark:scrollbar-hover:scrollbar-thumb-zinc-400/80 absolute top-0 left-0 flex h-full w-full flex-1 flex-col overflow-y-auto">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ViewTransitions>
      </body>
    </html>
  );
}
