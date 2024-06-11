"use client";
import ExerciseBoard from "@/components/ExerciseBoard";
import ReactPlayerComponent from "@/components/ReactPlayer";
import UploadFile from "@/components/UploadFile";

import React, { useState } from "react";
import AudioUrlInput from "@/components/AudioUrlInput";

export default function Home() {
    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    const [fragmetAudioTime, setFragmentAudioTime] = useState();

    return (
        <div className="h-screen bg-slate-50">
            <div className="sticky bg-slate-50 top-0 col-span-2 w-full h-16 flex justify-center border-b-[0.01rem] border-gray-600">
                <p className="place-self-center text-center font-mono text-lg">
                   🗣️ English Speaking Activities
                </p>
            </div>
            <main className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] h-fit justify-items-center gap-6 space-evenly m-5">
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
            </main>
        </div>
    );
}
