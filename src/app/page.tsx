"use client";
import ReactPlayerComponent from "@/components/ReactPlayer";
import UploadFile from "@/components/UploadFile";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

const handleImageUpload = async (event: any, setFileUrl: any) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        setFileUrl(url);
    }
};

export default function Home() {
    const [audioUrl, setAudioUrl] = useState("");

    return (
        <main className=" min-h-screen flex-col items-center ">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                English Speaking Activities
            </p>
            <div className="sm:flex  p-24 items-center justify-between font-mono text-sm">
                <UploadFile setAudioUrl={setAudioUrl} />
              
                <ReactPlayerComponent fileUrl={audioUrl} />
            </div>
        </main>
    );
}
