import { Dispatch, SetStateAction } from "react";
import { FragmentAudioData } from "./audioTypes";

export interface ExerciseBoardProps {
    audioFile: File | null;
    audioUrl: string | null;
    setFragmentAudioTime: React.Dispatch<
        React.SetStateAction<FragmentAudioData | null>
    >;
}

export interface ExerciseCardsProps {
    fragmentsAudioData: FragmentAudioData[];
    setFragmentAudioTime: Dispatch<SetStateAction<FragmentAudioData | null>> ;
}
