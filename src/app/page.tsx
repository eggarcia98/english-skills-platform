import React, { useState } from "react";
import HomeContent from "@/components/HomeContent";
import { FragmentAudioData } from "@/types";

async function fetchLoadedExercises(): Promise<FragmentAudioData[]> {
    const host = process.env.NEXT_PUBLIC_API_SERVER_HOST;

    try {
        const res = await fetch(`${host}/saved_audio_transcripts`);
        if (!res.ok) return []; // Return empty array if the response is not ok

        const response = await res.json(); // Ensure correct typing of the response
        
        const data: FragmentAudioData[] = response.data;
        return data;
    } catch (err) {
        // console.error("Error fetching audio transcripts:", err);
        return []; // Return an empty array if there's a network or fetch error
    }
}

export default async function Home() {
    const loadedExercises = await fetchLoadedExercises();

    return (
        <main className="flex flex-grow px-4 sm:px-20 items-center ">
            <div className="container mx-auto text-center w-auto">
                <HomeContent loadedExercises={loadedExercises} />;
            </div>
        </main>
    );
}
