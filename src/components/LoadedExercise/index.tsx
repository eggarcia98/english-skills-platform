import { FragmentAudioData } from "@/types";
import { useEffect, useState } from "react";


export default function LoadedExercise() {
    const [loadedExercises, setLoadedExercises] = useState<FragmentAudioData[]>([]);

    const filterExercisesWithUrlSource = (allExercises: FragmentAudioData[]) => {
        return allExercises.filter(
            (exerciseMetadata: FragmentAudioData) =>
                !!exerciseMetadata.source_url
        );
    };

    const formatFilename = (filename: string) => {
        return (
            filename
                // Remove the file extension
                .replace(/\.\w+$/, "")
                // Remove any YouTube ID in square brackets
                .replace(/\-\[.*?\]$/, "")
                // Replace underscores with spaces
                .replace(/_/g, " ")
                // Capitalize the first letter of each word
                .replace(/\b\w/g, (char) => char.toUpperCase())
                .trim()
        );
    };

    const aetGridLoadedExerciseStyle = () => {
        return loadedExercises.length > 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1";
    };

    const fetchLoadedExercises = () => {
        const host = process.env.NEXT_PUBLIC_API_SERVER_HOST;
        fetch(`${host}/saved_audio_transcripts`)
            .then((res) => {
                return res.json();
            })
            .then(({ data, error }) => {
                if (error) {
                    throw new Error(error);
                }
                
                setLoadedExercises(filterExercisesWithUrlSource(data ?? []));
            })
            .catch((error) => error);
    };

    useEffect(() => fetchLoadedExercises(), []);

    return (
        <div className="my-16 text-left grid grid-cols-1">
            <h1>Try Exercises performed by other students</h1>
            <div
                className={`grid ${aetGridLoadedExerciseStyle()} gap-5 my-8 max-h-[calc(3*5rem)] overflow-y-scroll`}
            >
                {loadedExercises.map(
                    (
                        { filename, duration, source_url }: FragmentAudioData,
                        index: number
                    ) => (
                        <a
                            key={index}
                            href="/exercises"
                            onClick={() => {
                                localStorage.setItem(
                                    "sourceUrl",
                                    source_url ?? ""
                                );

                            }}
                            className="grid grid-cols-[auto_1fr] border rounded-lg w-3/4 sm:w-full items-center justify-self-center"
                        >
                            <div className="px-4 border-r flex flex-col ">
                                Play ►
                            </div>
                            <div className="p-2 px-4 flex flex-col items-start  overflow-hidden">
                                <div className="truncate font-semibold ">
                                    {formatFilename(filename ?? "")}
                                </div>
                                <div className="text-gray-500"> {duration}</div>
                            </div>
                        </a>
                    )
                )}
            </div>
        </div>
    );
}
