import React, { useState } from "react";
import HomeContent from "@/components/HomeContent";
import { FragmentAudioData } from "@/types";

async function fetchLoadedExercises(): Promise<FragmentAudioData[]> {
    const host = process.env.NEXT_PUBLIC_API_SERVER_HOST;
    const res = await fetch(`${host}/saved_audio_transcripts`);
    const response = await res.json();

    if (!response) return [];

    const { data } = response;
    return data.filter((exercise: FragmentAudioData) => !!exercise.source_url);
}

export default async function Home() {
    const loadedExercises = await fetchLoadedExercises();

    return (
        <main className="flex flex-grow bg-gray-50 px-4 sm:px-20 items-center">
            <div className="container mx-auto text-center w-auto">
                <HomeContent loadedExercises={loadedExercises} />;
            </div>
        </main>
    );
}
