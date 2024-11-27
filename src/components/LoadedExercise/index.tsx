import { useEffect, useState } from "react";

interface AudioUrlInputProps {
    setAudioUrl: React.Dispatch<React.SetStateAction<null>>;
}

export default function LoadedExercise({ setActiveSection }: any) {
    const [loadedExercises, setLoadedExercises] = useState([]);

    const filterExercisesWithUrlSource = (allExercises: any) => {
        return allExercises.filter(
            (exerciseMetadata: any) => !!exerciseMetadata.source_url
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
                        { filename, duration, source_url }: any,
                        index: number
                    ) => (
                        <a
                            key={index}
                            href="#"
                            onClick={() => {
                                setActiveSection("exercises")
                                localStorage.setItem(
                                    "sourceUrl",
                                    source_url
                                );

                            }}
                            className="grid grid-cols-[auto_1fr] border rounded-lg w-3/4 sm:w-full items-center justify-self-center"
                        >
                            <div className="px-4 border-r flex flex-col ">
                                Play ►
                            </div>
                            <div className="p-2 px-4 flex flex-col items-start  overflow-hidden">
                                <div className="truncate font-semibold ">
                                    {formatFilename(filename)}
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
