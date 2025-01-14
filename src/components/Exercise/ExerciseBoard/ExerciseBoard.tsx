import { useEffect, useState } from "react";
import ExerciseCards from "./ExerciseCards";

import { ExerciseBoardProps } from "@/types";
import FlashDialog from "@/components/FlashDialog";

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
    const [isServerApiDown, setIsServerApiDown] = useState(false);
    const [visible, setVisible] = useState(false);

    const [audioSummary, setAudioSummary] = useState([]);

    const fetchAudioSummary = (audioSources: AudioSources) => {
        const { file, url } = audioSources;

        if (!file && !url && !localStorage.getItem("sourceUrl")) return;

        const host = process.env.NEXT_PUBLIC_API_SERVER_HOST;
        // const port = process.env.NEXT_PUBLIC_API_SERVER_PORT;

        const formData = new FormData();
        if (file) formData.append("audio", file, file.name);

        setIsProcessing(true);
        fetch(`${host}/summarize_audio`, {
            method: "POST",
            body: !!file
                ? formData
                : JSON.stringify({
                      url: url ? url : localStorage.getItem("sourceUrl"),
                  }),
        })
            .then((res) => {
                return res.json();
            })
            .then(({ transcript, error }) => {
                setAudioSummary(error ? [] : transcript);
                setIsProcessing(error ? true : false);
            })
            .catch((error) => {
                setIsProcessing(false);
                setIsServerApiDown(true);
                console.error("Error fetching audio summary:", error);
            });
    };

    useEffect(() => fetchAudioSummary({ file: audioFile }), [audioFile]);
    useEffect(() => fetchAudioSummary({ url: audioUrl }), [audioUrl]);

    if (!(audioFile || audioUrl)) return <></>;

    const getBrocessingBoilerplate = () => {
        return (
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
        );
    };

    const getExerciseCardsContent = () => {
        return (
            <ExerciseCards
                fragmentsAudioData={audioSummary}
                setFragmentAudioTime={setFragmentAudioTime}
            />
        );
    };

    const getServerApiDownContent = () => {
        return <FlashDialog  />;
    };

    const getContentPage = () => {
        console.log("GETTING CONTENT: ");

        if (isServerApiDown) return getServerApiDownContent();

        return getExerciseCardsContent();
    };

    return <>{isProcessing ? getBrocessingBoilerplate() : getContentPage()}</>;
}
