import { useEffect, useState } from "react";

export default function LoadedExercise() {
    const [loadedExercises, setLoadedExercises] = useState([]);

    const fetchLoadedExercises = () => {
        fetch("https://saavn.dev/api/search/songs?query=Adele&limit=6")
            .then((res) => {
                console.log("TRY");
                return res.json();
            })
            .then(({ data, error }) => {
                const { results } = data;
                setLoadedExercises(results);
            })
            .catch((error) => error);
    };

    useEffect(() => fetchLoadedExercises(), []);

    return (
        <div className="my-16 text-left grid grid-cols-1">
            <h1>Try Exercises performed by other students</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-8 max-h-[calc(3*5rem)] overflow-y-scroll">
                {loadedExercises.map(({ name, duration }: any) => (
                    <button className="grid grid-cols-[auto_1fr] border rounded-lg w-3/4 sm:w-full items-center justify-self-center">
                        <div className="px-4 border-r flex flex-col ">PLAY</div>
                        <div className="p-2 px-4 flex flex-col items-start  overflow-hidden">
                            <div className="truncate font-semibold ">
                                {name}
                            </div>
                            <div className="text-gray-500"> {duration}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
