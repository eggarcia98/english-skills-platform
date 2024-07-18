import React, { useState, useRef, useEffect } from "react";

interface UploadFileProps {
    setAudioFile: React.Dispatch<React.SetStateAction<null>>;
}

export default function UploadFile({ setAudioFile }: UploadFileProps) {
    const handleAudioUpload = (event: any) => {
        const fileInput = event.target;
        const files = fileInput.files;

        const audioFile = [...files][0];
        console.log("UPLOAD");
        if (audioFile) {
            setAudioFile(audioFile);
        }
        fileInput.value = "";
    };

    // Happen before you drop the file
    const handleDrag = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
    };

    // Function to handle file drop
    const handleDrop = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const { files } = event.dataTransfer;
        if (files && files.length) {
            event["target"] = { files };
            handleAudioUpload(event);
        }
    };

    return (
        <form
            action="#"
            className="h-24 w-60 min-w-[auto] bg-white bg-gray-100 rounded-lg shadow-inner m-6"
            onDragOver={handleDrag}
            onDragEnter={handleDrag}
            onDrop={handleDrop}
        >
            <input
                type="file"
                id="file-upload"
                accept="audio/*"
                className="hidden"
                onChange={(event) => handleAudioUpload(event)}
            />
            <label
                htmlFor="file-upload"
                className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
            >
                <p className="text-xs font-light text-center text-gray-500">
                    Upload your audio here
                </p>
                <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                </svg>
            </label>
        </form>
    );
}
