import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const titlePage = "Audio Learner";

    return (
        <html lang="en">
            <body>
                <div
                    className="grid grid-flow-row grid-rows-[auto_1fr_auto] min-h-dvh text-gray-800 bg-fixed bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/image-bg-2.png')",
                    }}
                >
                    {/* Navigation */}
                    <NavBar titlePage={titlePage} />

                    {/* Main Content */}
                    <main className="flex flex-grow bg-gray-50 bg-opacity-80 px-4 sm:px-20 items-center">
                        <div className="container mx-auto text-center w-auto">
                            {children}
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="border-t border-gray-200 bg-white bg-opacity-90 py-4">
                        <div className="container mx-auto text-center text-sm text-gray-500 ">
                            <p>
                                &copy; {new Date().getFullYear()} {titlePage}.
                                All rights reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
