"use client";
import ExerciseBoard from "@/components/Exercise/ExerciseBoard";
import ReactPlayerComponent from "@/components/Audio/ReactPlayer";
import UploadFile from "@/components/Audio/UploadFile";

import React, { useState } from "react";
import AudioUrlInput from "@/components/Audio/AudioUrlInput";
import { FragmentAudioData } from "@/types";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home"); // State to track the active section
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const titlePage = "Audio Learner";

    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    const [fragmetAudioTime, setFragmentAudioTime] = useState(
        {} as FragmentAudioData
    );

    // const handleMenuClick = (section: string) => {
    //     setActiveSection(section);
    //     setIsMenuOpen(false); // Close the mobile menu after clicking
    // };

    return (
        <div className="min-h-screen flex flex-col text-gray-800">
            {/* Navigation */}
            <NavBar titlePage={titlePage} setActiveSection={setActiveSection} />

            <main className="flex-grow bg-gray-50 px-4 sm:px-20 flex items-center justify-center">
                <div className="container bg-pink-500 text-center w-auto">
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
