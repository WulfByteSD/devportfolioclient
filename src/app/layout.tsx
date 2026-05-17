import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import styles from "./layout.module.scss"; // SCSS module import
import "./globals.css";
import Sidebar from "@/layouts/sidebar/Sidebar.layout";
import NavigationPane from "@/layouts/navigationPane/NavigationPane.layout";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ParallaxParticles from "@/components/ParallaxParticles.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Showcasing my skills, projects, and resume",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading headers opts every page into dynamic (per-request) rendering.
  // This allows Next.js to apply the per-request nonce from middleware
  // to the inline scripts it generates for React hydration.
  await headers();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <div className={styles.videoContainer}>
          <video
            src="https://res.cloudinary.com/wulfdev/video/upload/v1715257457/18324-291012885_large_sjnfy1.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <track kind="captions" srcLang="en" label="No captions available" />
          </video>
        </div> */}
        {/* <BrushstrokeBackground /> */}
        <ParallaxParticles layerCount={4} colors={["#ff9999", "#99ccff", "#ccff99", "#ffffff"]} />
        {/* <WaveGridBackground /> */}
        {/* <NebulaeNoise /> */}
        <div className={styles.layoutRoot}>
          <ReactQueryProvider>
            <aside className={styles.sidebar}>
              <Sidebar />
            </aside>
            <main className={styles.mainContent}>{children}</main>
            <nav className={styles.navPane}>
              <NavigationPane />
            </nav>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
