"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const handleImageUpload = async (event: any, setFileUrl: any) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        setFileUrl(url);
    }
};

export default function Home() {
    const [fileUrl, setFileUrl] = useState("");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    English Speaking Activities
                </p>
                <div>
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={(event) =>
                            handleImageUpload(event, setFileUrl)
                        }
                    />
                </div>
                <ReactPlayer
                    url={
                        fileUrl ||
                        "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
                    }
                    controls={true}
                />
            </div>
        </main>
    );
}
