import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function ReactPlayerComponent({ audioFile }: any) {
    const playerRef = useRef(null);

    const getAudioLocalUrl = () => {
        if (!audioFile)
            return "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4";

        const url = URL.createObjectURL(audioFile);
        return url;
    };

    return (
        <ReactPlayer
            ref={playerRef}
            url={getAudioLocalUrl()}
            controls={true}
            onPlay={() => {
                if (playerRef.current) {
                    playerRef.current.seekTo(10, "seconds");
                }
            }}
        />
    );
}
