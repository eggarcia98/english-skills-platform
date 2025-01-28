"use client"; // Mark this component as a client component

import React from "react";
import { FragmentAudioData } from "@/types";

interface LoadedExerciseItemProps {
    exercise: FragmentAudioData;
}

export default function LoadedExerciseItem({
    exercise,
}: LoadedExerciseItemProps) {
    const { filename, duration, source_url } = exercise;

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

    return (
        <a
            href="/exercises"
            onClick={() => {
                localStorage.setItem("sourceUrl", source_url ?? "");
            }}
            className="grid grid-cols-[auto_1fr] border rounded-lg w-3/4 sm:w-full items-center justify-self-center bg-white"
        >
            <div className="px-4 border-r flex flex-col ">Play ►</div>
            <div className="p-2 px-4 flex flex-col items-start overflow-hidden">
                <div className="truncate font-semibold ">
                    {formatFilename(filename ?? "")}
                </div>
                <div className="text-gray-500"> {duration}</div>
            </div>
        </a>
    );
}
