import { eventNames } from "process";
import { useRef, useState } from "react";

interface AudioUrlInputProps {
    setAudioUrl: React.Dispatch<React.SetStateAction<null>>;
}

export default function AudioUrlInput({ setAudioUrl }: AudioUrlInputProps) {
    const [inputAudioUrlValue, setInputAudioUrlValue] = useState(null);
    return (
        <div className="flex flex-col gap-3 items-center w-full h-fit">
            ⏤ or use Youtube url ⏤
            <div className="flex gap-2 w-full justify-center">
                <input
                    className="peer h-full= w-full sm:w-full md:w-96 lg:w-98 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal dark:text-blue-gray-700 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="... paste url here"
                    onChange={(event: any) =>
                        setInputAudioUrlValue(event.target.value)
                    }
                />
                <button
                    className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setAudioUrl(inputAudioUrlValue)}
                >
                    Start
                </button>
            </div>
        </div>
    );
}
