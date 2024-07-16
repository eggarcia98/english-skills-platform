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
    const [fragmentAudioTimeChanged, setFragmentAudioTimeChanged] =
        useState(false);

    useEffect(() => {
        return () => {
            if (audioFile) {
                URL.revokeObjectURL(audioFile);
            }
        };
    }, [audioFile]);

    useEffect(() => {
        restartAudioToAudioFragmentStartTimeSetted();
    }, [hasPlayed, fragmetAudioTime]);

    useEffect(() => {
        setFragmentAudioTimeChanged(true);
        setHasPlayed(false);
    }, [fragmetAudioTime]);

    const getAudioLocalUrl = () => {
        if (audioUrl) return audioUrl;

        const url = URL.createObjectURL(audioFile);
        return url;
    };

    const restartAudioToAudioFragmentStartTimeSetted = () => {
        if (playerRef.current && fragmentAudioTimeChanged && !hasPlayed) {
            playerRef.current.seekTo(
                fragmetAudioTime.audio_start_time,
                "seconds"
            );
            setIsPlaying(true);
            setFragmentAudioTimeChanged(false);
        }
    };

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
            onStart={restartAudioToAudioFragmentStartTimeSetted}
            onProgress={({ playedSeconds }) => {
                if (
                    playerRef.current &&
                    fragmentAudioTimeChanged &&
                    !hasPlayed
                ) {
                    if (playedSeconds >= fragmetAudioTime.audio_end_time) {
                        setFragmentAudioTimeChanged(false);
                        setIsPlaying(false);
                        setHasPlayed(true);
                    }
                }
            }}
        />
    );
}
