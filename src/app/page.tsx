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
        <main className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] h-fit justify-items-center">
            <div className="col-span-2">
                <p className="">English Speaking Activities</p>
            </div>
            <div className=" col-span-2 justify-center">
                <UploadFile setAudioFile={setAudioFile} />
                <AudioUrlInput setAudioUrl={setAudioUrl} />
            </div>
            <ReactPlayerComponent
                audioFile={audioFile}
                audioUrl={audioUrl}
                fragmetAudioTime={fragmetAudioTime}
            />
            <ExerciseBoard
                audioFile={audioFile}
                audioUrl={audioUrl}
                setFragmentAudioTime={setFragmentAudioTime}
            />
        </main>
    );
}
