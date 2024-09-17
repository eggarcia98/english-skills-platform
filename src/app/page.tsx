"use client";
import ExerciseBoard from "@/components/Exercise/ExerciseBoard";
import ReactPlayerComponent from "@/components/Audio/ReactPlayer";
import UploadFile from "@/components/Audio/UploadFile";
import Image from "next/image";

import React, { Dispatch, SetStateAction, useState } from "react";
import AudioUrlInput from "@/components/Audio/AudioUrlInput";
import { FragmentAudioData } from "@/types";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home"); // State to track the active section
    const titlePage = "Audio Learner";

    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    const [fragmetAudioTime, setFragmentAudioTime] = useState(
        {} as FragmentAudioData
    );

    const handleMenuClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false); // Close the mobile menu after clicking
    };

    const menuItems = () => <div></div>;

    return (

        <div className="min-h-screen flex flex-col text-gray-800">
            {/* Navigation */}
            <nav className="border-b border-gray-200 bg-white py-1 n-xs:px-40 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="container flex items-center">
                        <Image
                            src="/logo.png" // The path should be relative to the 'public' folder
                            alt="A descriptive alt text"
                            className="mr-3"
                            width={50} // Define width
                            height={50} // Define height
                        />
                        <h1 className="text-xl font-semibold tracking-wide">
                            {titlePage}
                        </h1>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16m-7 6h7"
                                    }
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    {/* Desktop Menu Items */}
                    <ul className="lg:flex space-x-6 text-sm hidden">
                        <li>
                            <button
                                onClick={() => handleMenuClick("home")}
                                className="hover:text-blue-600 transition-colors duration-300"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleMenuClick("exercises")}
                                className="hover:text-blue-600 transition-colors duration-300"
                            >
                                Exercises
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <ul className="space-y-4 text-center mt-4">
                            <li>
                                <a
                                    href="/"
                                    onClick={() => handleMenuClick("home")}
                                    className="block text-gray-700 hover:text-blue-600"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/exercises"
                                    onClick={() => handleMenuClick("exercises")}
                                    className="block text-gray-700 hover:text-blue-600"
                                >
                                    Excersise
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <main className="flex-grow bg-gray-50 px-4 sm:px-20 flex items-center justify-center">
                <div className="container mx-auto text-center">
                    {activeSection === "home" && (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Simple, Customizable, and Easy to use
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                <br />
                                This tool helps improve your English listening
                                skills using your favorite series or even your
                                own audio files.
                                <br />
                                <br />
                                All you need is a YouTube link to the video or
                                audio you want to practice with, or you can
                                upload an audio file directly from your device
                            </p>
                            <button
                                onClick={() => handleMenuClick("exercises")}
                                className="px-8 py-3 bg-blue-600 text-white text-sm rounded-md shadow-sm hover:bg-blue-700 transition-all duration-300"
                            >
                                Get Started
                            </button>
                        </div>
                    )}
                    {activeSection === "exercises" && (
                        <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] justify-items-center gap-6 space-evenly m-5">
                            <div className="w-full col-span-2 ">
                                <div className="flex flex-col w-full items-center ">
                                    <UploadFile setAudioFile={setAudioFile} />
                                    <AudioUrlInput setAudioUrl={setAudioUrl} />
                                </div>
                            </div>

                            <div className="w-full col-span-2 lg:col-span-1">
                                <ReactPlayerComponent
                                    audioFile={audioFile}
                                    audioUrl={audioUrl}
                                    fragmetAudioTime={fragmetAudioTime}
                                />
                            </div>
                            <div className="w-full col-span-2 lg:col-span-1">
                                <ExerciseBoard
                                    audioFile={audioFile}
                                    audioUrl={audioUrl}
                                    setFragmentAudioTime={setFragmentAudioTime}
                                />
                            </div>
                        </div>
                    )}

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
