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
        <div className="h-screen">
            <main className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] h-fit justify-items-center gap-6 space-evenly m-5">
                <div className="col-span-2 m-2">
                    <p className="">English Speaking Activities</p>
                </div>
                <div className="col-span-2 w-full">
                    <div className="flex flex-col w-full items-center ">
                        <UploadFile setAudioFile={setAudioFile} />
                        <AudioUrlInput setAudioUrl={setAudioUrl} />
                    </div>
                </div>

                <div className="w-full ">
                    <ReactPlayerComponent
                        audioFile={audioFile}
                        audioUrl={audioUrl}
                        fragmetAudioTime={fragmetAudioTime}
                    />
                </div>
                <div className="w-full  ">
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
