import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function ReactPlayerComponent({
    audioFile,
    audioUrl,
    fragmetAudioTime,
}: any) {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hasPlayed, setHasPlayed] = useState(false);

    const getAudioLocalUrl = () => {
     
        if (audioUrl) return audioUrl;

        const url = URL.createObjectURL(audioFile);
        return url;
    };

    useEffect(() => {
        // Clear the object URL to free up memory when the component unmounts
        setIsPlaying(true)
        setHasPlayed(false)
        return () => {
            if (audioFile) {
                URL.revokeObjectURL(audioFile);
            }
        };
    }, [audioFile, fragmetAudioTime]);

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <ReactPlayer
            ref={playerRef}
            url={getAudioLocalUrl()}
            controls={true}
            playing={!!fragmetAudioTime?.audio_start_time && isPlaying} // Control the playback state
            onPlay={() => {
                console.log(playerRef.current);
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
                        fragmetAudioTime = {}
                    }
                }
            }}
        />
    );
}
