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
    const [currentUrlAudio, setCurrentUrlAudio] = useState("");

    useEffect(() => {
        if (audioFile) {
            const url = URL.createObjectURL(audioFile);
            URL.revokeObjectURL(audioFile);
            setCurrentUrlAudio(url);
        }
    }, [audioFile]);

    useEffect(() => {
        setCurrentUrlAudio(audioUrl);
    }, [audioUrl]);

    useEffect(() => {
        restartAudioToAudioFragmentStartTimeSetted();
    }, [hasPlayed, fragmetAudioTime]);

    useEffect(() => {
        setHasPlayed(false);
    }, [fragmetAudioTime]);

    const restartAudioToAudioFragmentStartTimeSetted = () => {
        if (playerRef.current && !hasPlayed) {
            playerRef.current.seekTo(
                fragmetAudioTime?.audio_start_time ?? 0,
                "seconds"
            );
            setIsPlaying(true);
        }
    };

    if (!(audioFile || audioUrl)) return <></>;

    return (
        <div className="max-h-[600px] h-full w-full flex flex-col">
            <ReactPlayer
                ref={playerRef}
                url={currentUrlAudio}
                controls={true}
                width="100%"
                height="100%"
                className="hidden-video"
                playing={isPlaying} // Control the playback state
                onStart={restartAudioToAudioFragmentStartTimeSetted}
                onProgress={({ playedSeconds }) => {
                    if (playerRef.current && !hasPlayed) {
                        if (playedSeconds >= fragmetAudioTime.audio_end_time) {
                            setIsPlaying(false);
                            setHasPlayed(true);
                        }
                    }
                }}
            />
        </div>
    );
}
