import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function ReactPlayerComponent({ audioFile, audioUrl }: any) {
    const playerRef = useRef(null);

    const getAudioLocalUrl = () => {
        if (audioUrl)
            return audioUrl;

        const url = URL.createObjectURL(audioFile);
        return url;
    };

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <ReactPlayer
            ref={playerRef}
            url={getAudioLocalUrl()}
            controls={true}
            onPlay={() => {
                // if (playerRef.current) {
                //     playerRef.current.seekTo(10, "seconds");
                // }
            }}
        />
    );
}
