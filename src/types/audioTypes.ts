export interface AudioState {
    audioSummary: File | null;
    audioUrl: string | null;
    fragmetAudioTime: number | null;
}

export interface FragmentAudioData {
    audio_end_time: number;
    audio_start_time: number;
    chunk_start_time: number;
    transcript: string;
    source_url?: string;
    filename?: string;
    isApproved?: boolean;
    hints?: string;
}
