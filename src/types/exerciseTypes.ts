import { Dispatch, SetStateAction } from "react";
import { FragmentAudioData } from "./audioTypes";

export interface ExerciseBoardProps {
    audioFile: File | null;
    audioUrl: string | null;
    setFragmentAudioTime: React.Dispatch<
        React.SetStateAction<FragmentAudioData>
    >;
    userRequestPlayAudioFragment?: void;
}

export interface ExerciseCardsProps {
    fragmentsAudioData: FragmentAudioData[];
    setFragmentAudioTime: React.Dispatch<
        React.SetStateAction<FragmentAudioData>
    >;
}
