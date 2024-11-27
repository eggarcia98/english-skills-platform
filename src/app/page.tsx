"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Exercise from "@/components/Exercise";
import HomeContent from "@/components/HomeContent";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home"); // State to track the active section
    const titlePage = "Audio Learner";

    return (
        <main className="flex flex-grow bg-gray-50 px-4 sm:px-20 items-center">
            <div className="container mx-auto text-center w-auto">
                AUDIO LEARNER
            </div>
        </main>
    );
}
