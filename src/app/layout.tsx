import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ParticleBackground} from "./ui";
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "KLIRK - Developer Portfolio",
    description: "Programming portfolio showcasing skills and projects",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">

        <body
            className={`${jetbrainsMono.className} antialiased flex flex-col h-full m-0 relative`}
        >
        <ParticleBackground/>
        <Header/>
        <main className="flex-1 relative z-0">
            {children}
        </main>
        <Footer/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
