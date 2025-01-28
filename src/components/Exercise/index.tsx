"use client";

import ExerciseBoard from "@/components/Exercise/ExerciseBoard";
import ReactPlayerComponent from "@/components/Audio/ReactPlayer";
import UploadFile from "@/components/Audio/UploadFile";

import React, { useEffect, useState } from "react";
import AudioUrlInput from "@/components/Audio/AudioUrlInput";
import { FragmentAudioData } from "@/types";

export default function Exercise() {
    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const [fragmetAudioTime, setFragmentAudioTime] = useState(
        {} as FragmentAudioData
    );

    useEffect(() => {
        const savedAudioUrl = localStorage.getItem("sourceUrl") ?? "";

        if (savedAudioUrl) {
            setAudioUrl(savedAudioUrl);
            localStorage.removeItem("sourceUrl");
        }
    }, []);

    return (
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
    );
}
