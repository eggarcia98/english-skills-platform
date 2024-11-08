import { useEffect, useState } from "react";

export default function LoadedExercise() {
    const [loadedExercises, setLoadedExercises] = useState([]);

    const fetchLoadedExercises = () => {
        fetch(
            "https://audio-summarizer-248854586820.us-central1.run.app/saved_audio_transcripts"
        )
            .then((res) => {
                console.log("TRY");
                return res.json();
            })
            .then(({ data, error }) => {
                console.log(data, error);
                setLoadedExercises(data);
            })
            .catch((error) => error);
    };

    useEffect(() => fetchLoadedExercises(), []);

    return (
        <div className="my-16 text-left grid grid-cols-1">
            <h1>Try Exercises performed by other students</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-8 max-h-[calc(3*5rem)] overflow-y-scroll">
                {loadedExercises.map(
                    ({ filename, duration }: any, index: number) => (
                        <button
                            key={index}
                            className="grid grid-cols-[auto_1fr] border rounded-lg w-3/4 sm:w-full items-center justify-self-center"
                        >
                            <div className="px-4 border-r flex flex-col ">
                                Play ►
                            </div>
                            <div className="p-2 px-4 flex flex-col items-start  overflow-hidden">
                                <div className="truncate font-semibold ">
                                    {filename}
                                </div>
                                <div className="text-gray-500"> {duration}</div>
                            </div>
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
