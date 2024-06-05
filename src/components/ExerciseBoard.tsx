import { useEffect, useState } from "react";
import ExerciseCards from "./ExerciseCards";

export default function ExerciseBoard({ audioFile, audioUrl, setFragmentAudioTime }: any) {
    const [isProcessing, setIsProcessing] = useState(true);
    const [audioSummary, setAudioSummary] = useState([]);

    useEffect(() => {
        setIsProcessing(true);
        console.log(!!audioFile ? audioFile : { url: audioUrl });
        fetch("http://localhost:6030/summarize_audio", {
            headers: {
                "Content-Type": !!audioFile ? "audio/*" : "application/json",
            },
            method: "POST",
            body: !!audioFile ? audioFile : JSON.stringify({ url: audioUrl }),
        })
            .then((res) => {
                return res.json();
            })
            .then(({ data, error }) => {
                setAudioSummary(error ? [] : data);
                setIsProcessing(error ? true : false);
                console.log({ data }, error ? true : false);
            })
            .catch((error) => console.log({ error }));
    }, [audioFile, audioUrl]);

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <>
            {isProcessing ? (
                <div className="flex min-h-screen items-center justify-center">
                    <div className="w-1/3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
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
                    </div>
                </div>
            ) : (
                <>
                    {
                        <ExerciseCards
                            audioSummary={audioSummary}
                            setFragmentAudioTime={setFragmentAudioTime}
                        />
                    }
                </>
            )}
        </>
    );
}
