"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isLandingPage = pathname === "/";
    return (
        <html lang="fr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Alumni+Sans+Pinstripe:ital@0;1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="layout">
                {!isLandingPage && <Navbar />}
                <main className="main">{children}</main>
                {!isLandingPage && <Footer />}
            </body>
        </html>
    );
}
