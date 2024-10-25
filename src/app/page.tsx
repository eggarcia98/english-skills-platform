"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Exercise from "@/components/Exercise";
import HomeContent from "@/components/HomeContent";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home"); // State to track the active section
    const titlePage = "Audio Learner";

    return (
        <div className="grid grid-flow-row grid-rows-[auto_1fr_auto] min-h-dvh text-gray-800 ">
            {/* Navigation */}
            <NavBar titlePage={titlePage} setActiveSection={setActiveSection} />

            {/* Main Content*/}
            <main className="flex-grow bg-gray-50 px-4 sm:px-20 flex items-center justify-center">
                <div className="container mx-auto text-center w-auto">
                    {activeSection === "home" && (
                        <HomeContent setActiveSection={setActiveSection} />
                    )}

                    {activeSection === "exercises" && <Exercise />}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-4">
                <div className="container mx-auto text-center text-sm text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} {titlePage}. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
