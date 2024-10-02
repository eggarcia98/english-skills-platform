import { useEffect, useState } from "react";
import ExerciseCards from "./ExerciseCards";

import { ExerciseBoardProps } from "@/types";

interface AudioSources {
    file?: File | null;
    url?: string | null;
}

export default function ExerciseBoard({
    audioFile,
    audioUrl,
    setFragmentAudioTime,
}: ExerciseBoardProps) {
    const [isProcessing, setIsProcessing] = useState(true);
    const [audioSummary, setAudioSummary] = useState([]);

    const fetchAudioSummary = (audioSources: AudioSources) => {
        const { file, url } = audioSources;

        if (!file && !url) return;

        const host =
            "https://audio-summarizer-248854586820.us-central1.run.app";
        const port = process.env.NEXT_PUBLIC_API_SERVER_PORT;

        const formData = new FormData();
        if (file) formData.append("audio", file, file.name);

        setIsProcessing(true);

        fetch(`${host}/summarize_audio`, {
            method: "POST",
            body: !!file ? formData : JSON.stringify({ url }),
        })
            .then((res) => {
                return res.json();
            })
            .then(({ transcript, error }) => {
                setAudioSummary(error ? [] : transcript);
                setIsProcessing(error ? true : false);
            })
            .catch((error) => error);
    };

    useEffect(() => fetchAudioSummary({ file: audioFile }), [audioFile]);
    useEffect(() => fetchAudioSummary({ url: audioUrl }), [audioUrl]);

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <>
            {isProcessing ? (
                <div className="rounded overflow-hidden shadow-lg animate-pulse">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="px-6 py-4">
                        <div className="h-6 bg-gray-300 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-2/3"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            ) : (
                <>
                    {
                        <ExerciseCards
                            fragmentsAudioData={audioSummary}
                            setFragmentAudioTime={setFragmentAudioTime}
                        />
                    }
                </>
            )}
        </>
    );
}
