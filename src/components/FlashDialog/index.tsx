import { useState, useEffect, SetStateAction, Dispatch } from "react";

interface FlashDialogProps {
    message?: string;
    duration?: number;
}

export default function FlashDialog({
    message = "Service is temporarily unavailable. Please try again later.",
    duration = 6000,
}: FlashDialogProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            // return () => clearTimeout(timer); // Cleanup on unmount or when `visible` changes
        }
    }, []);

    return (
        visible && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 transform bg-blue-100 border-blue-500 text-blue-700 px-4 py-3 rounded-md shadow-md duration-500 sm:right-4 sm:left-auto w-fit sm:-translate-x-4">
                <p className="font-bold text-sm">Informational message</p>
                <p className="text-xs">{message}</p>
            </div>
        )
    );
}
