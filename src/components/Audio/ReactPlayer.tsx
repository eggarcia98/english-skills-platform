import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function ReactPlayerComponent({
    audioFile,
    audioUrl,
    fragmetAudioTime,
}: any) {
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hasPlayed, setHasPlayed] = useState(false);

    const getAudioLocalUrl = () => {
        if (audioUrl) return audioUrl;

        const url = URL.createObjectURL(audioFile);
        return url;
    };

    useEffect(() => {
        // Clear the object URL to free up memory when the component unmounts
        return () => {
            if (audioFile) {
                URL.revokeObjectURL(audioFile);
            }
        };
    }, [audioFile]);

    useEffect(() => {
        if (
            playerRef.current &&
            fragmetAudioTime?.audio_start_time &&
            !hasPlayed
        ) {
            playerRef.current.seekTo(
                fragmetAudioTime.audio_start_time,
                "seconds"
            );
            setIsPlaying(true);
        }
    }, [hasPlayed, fragmetAudioTime]);

    useEffect(() => {
        console.log("CAMBIO");
        setHasPlayed(false);
    }, [fragmetAudioTime]);

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <ReactPlayer
            ref={playerRef}
            url={getAudioLocalUrl()}
            controls={true}
            width="100%"
            height="100%"
            className="hidden-video"
            playing={isPlaying} // Control the playback state
            onStart={() => {
                if (
                    playerRef.current &&
                    fragmetAudioTime?.audio_start_time &&
                    !hasPlayed
                ) {
                    playerRef.current.seekTo(
                        fragmetAudioTime.audio_start_time,
                        "seconds"
                    );
                }
            }}
            onProgress={({ playedSeconds }) => {
                if (
                    playerRef.current &&
                    fragmetAudioTime?.audio_end_time &&
                    !hasPlayed
                ) {
                    if (playedSeconds >= fragmetAudioTime.audio_end_time) {
                        setIsPlaying(false);
                        setHasPlayed(true);
                        // fragmetAudioTime = {};
                    }
                }
            }}
        />
    );
}
