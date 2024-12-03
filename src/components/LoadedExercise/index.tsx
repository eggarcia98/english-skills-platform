import { FragmentAudioData } from "@/types";
import { useEffect, useState } from "react";
import LoadedExerciseItem from "./LoadedExerciseItem";

interface LoadedExerciseProps {
    loadedExercises: FragmentAudioData[];
}

export default function LoadedExercise({
    loadedExercises,
}: LoadedExerciseProps) {
    const filterExercisesWithUrlSource = (
        allExercises: FragmentAudioData[]
    ) => {
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
