import { FragmentAudioData } from "@/types";
import { useEffect, useState } from "react";
import LoadedExerciseItem from "./LoadedExerciseItem";

interface LoadedExerciseProps {
    loadedExercises: FragmentAudioData[];
}

export default function LoadedExercise({
    loadedExercises,
}: LoadedExerciseProps) {
  

    const aetGridLoadedExerciseStyle = () => {
        return loadedExercises.length > 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1";
    };

    return (
        <div className="my-16 text-left grid grid-cols-1">
            <h1>Try Exercises performed by other students</h1>
            <div
                className={`grid ${aetGridLoadedExerciseStyle()} gap-5 my-8 max-h-[calc(3*5rem)] overflow-y-scroll`}
            >
                {loadedExercises.map((exercise, index) => (
                    <LoadedExerciseItem
                        key={index}
                        exercise={exercise}
                    />
                ))}
            </div>
        </div>
    );
}
