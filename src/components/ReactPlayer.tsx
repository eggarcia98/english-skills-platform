import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function ReactPlayerComponent({fileUrl}: any) {
    const playerRef = useRef(null);
    return (
        <ReactPlayer
            ref={playerRef}
            url={
                fileUrl ||
                "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
            }
            controls={true}
            onPlay={() => {
                if (playerRef.current) {
                    playerRef.current.seekTo(10, "seconds");
                }
            }}
        />
    );
}
