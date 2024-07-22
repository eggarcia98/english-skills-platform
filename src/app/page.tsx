"use client";
import ExerciseBoard from "@/components/Exercise/ExerciseBoard";
import ReactPlayerComponent from "@/components/Audio/ReactPlayer";
import UploadFile from "@/components/Audio/UploadFile";

import React, { Dispatch, SetStateAction, useState } from "react";
import AudioUrlInput from "@/components/Audio/AudioUrlInput";
import { FragmentAudioData } from "@/types";

export default function Home() {
    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    const [fragmetAudioTime, setFragmentAudioTime] = useState(
        {} as FragmentAudioData
    );

    return (
        <div className="h-screen flex flex-col bg-slate-50">
            <div className="sticky bg-slate-50 top-0 col-span-2 w-full h-16 flex justify-center border-b-[0.01rem] border-gray-600">
                <p className="place-self-center text-center font-mono text-lg dark:text-black">
                    🗣️ English Speaking Activities
                </p>
            </div>
            <div className="w-full col-span-2 flex flex-col items-center p-4 space-y-3">
                <UploadFile setAudioFile={setAudioFile} />
                <AudioUrlInput setAudioUrl={setAudioUrl} />
            </div>
            <main className="flex-1 grid n-xs:grid-cols-2 col-span-1 justify-items-center gap-6 m-5 ">
                <div className="w-full col-span-2 n-xs:col-span-1">
                    <ReactPlayerComponent
                        audioFile={audioFile}
                        audioUrl={audioUrl}
                        fragmetAudioTime={fragmetAudioTime}
                    />
                </div>
                <div className="w-full col-span-2 n-xs:col-span-1">
                    <ExerciseBoard
                        audioFile={audioFile}
                        audioUrl={audioUrl}
                        setFragmentAudioTime={setFragmentAudioTime}
                    />
                </div>
            </main>
        </div>
    );
}
