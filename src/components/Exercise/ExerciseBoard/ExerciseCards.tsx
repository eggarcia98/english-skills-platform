import React, { useEffect, useState } from "react";
import { ExerciseCardsProps, FragmentAudioData } from "@/types";

export default function ExerciseCards({
    fragmentsAudioData,
    setFragmentAudioTime,
}: ExerciseCardsProps) {
    const [cardsData, setCardsData] = useState(fragmentsAudioData);

    const [currentIndex, setCurrentIndex] = useState(0); // Initialize with the first card
    const [indexCardsAround, setIndexCardsAround] = useState({
        oneNext: 1,
        twoNext: 2,
        onePrevious: cardsData.length - 1,
        twoPrevious: cardsData.length - 2,
    }); // Initialize with the first card

    const sendTImefragmentToPlayer = (audioFragment: FragmentAudioData) => {
        console.log({ ...audioFragment });

        setFragmentAudioTime(null);
        setFragmentAudioTime({ ...audioFragment });
    };

    const updateIndexAround = (currentIndex: number) => {
        const onePrevious =
            currentIndex === 0 ? cardsData.length - 1 : currentIndex - 1;

        const twoPrevious =
            currentIndex === 0
                ? cardsData.length - 2
                : currentIndex === 1
                ? cardsData.length - 1
                : currentIndex - 2;

        const oneNext =
            currentIndex === cardsData.length - 1 ? 0 : currentIndex + 1;

        const twoNext =
            currentIndex === cardsData.length - 1
                ? 1
                : currentIndex === cardsData.length - 2
                ? 0
                : currentIndex + 2;

        const indexCardsAround = {
            oneNext,
            twoNext,
            onePrevious,
            twoPrevious,
        };
        setIndexCardsAround(indexCardsAround);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const currentIndex =
                prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1;

            updateIndexAround(currentIndex);
            return currentIndex;
        }); // Wrap around to the first card
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            const currentIndex =
                prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1;
            updateIndexAround(currentIndex);

            return currentIndex;
        }); // Wrap around to the last card
    };

    const evaluateAnswer = (
        event: any,
        audioFragment: FragmentAudioData,
        index: number
    ) => {
        if (event.key !== "Enter") return;

        const userAnswerParsed = event.target.value
            .trim()
            .toLowerCase()
            .replaceAll(",", "");

        const correctAnswerParsed = audioFragment.transcript
            .trim()
            .toLowerCase()
            .replaceAll(",", "");

        const userAnswerdWords = userAnswerParsed.split(" ");
        const correctAnswerdWords = correctAnswerParsed.split(" ");
        console.log(correctAnswerdWords);

        const hintList = [];
        let isFirstErrorSetted = false;
        for (let i = 0; i < correctAnswerdWords.length; i++) {
            console.log(userAnswerdWords[i], correctAnswerdWords[i]);
            if (
                userAnswerdWords[i] !== correctAnswerdWords[i] &&
                isFirstErrorSetted
            )
                hintList.push(
                    "_".repeat((correctAnswerdWords[i] ?? "").length)
                );
            else if (userAnswerdWords[i] === correctAnswerdWords[i]) {
                hintList.push(audioFragment.transcript.split(" ")[i]);
            } else {
                hintList.push(
                    `<b>${audioFragment.transcript.split(" ")[i]}</b>`
                );
                isFirstErrorSetted = true;
            }
        }

        const cardDataItemCopy = [...cardsData];
        cardDataItemCopy[index]["hints"] = hintList.join(" ");

        setCardsData(cardDataItemCopy);

        if (correctAnswerParsed === userAnswerParsed) {
            const cardDataItemCopy = [...cardsData];
            cardDataItemCopy[index]["isApproved"] = true;

            setCardsData(cardDataItemCopy);
        }
    };

    return (
        <div className=" overflow-hidden">
            <div className="w-full min-w-[435px] max-w-5xl mx-auto px-4 md:px-6 py-5">
                <section className="px-12">
                    <div className="max-w-lg mx-auto relative">
                        {cardsData.map(
                            (
                                audioFragment: FragmentAudioData,
                                index: number
                            ) => (
                                <div
                                    key={index}
                                    className={`
                                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                                        ${
                                            currentIndex === index
                                                ? "relative z-50 translate-x-0 scale-[100%]"
                                                : ""
                                        }
                                        ${
                                            index === indexCardsAround.oneNext
                                                ? "translate-x-14 scale-[90%] z-40"
                                                : ""
                                        }
                                        ${
                                            index === indexCardsAround.twoNext
                                                ? "translate-x-24 scale-[80%] z-30"
                                                : ""
                                        }
                                        ${
                                            index ===
                                            indexCardsAround.onePrevious
                                                ? "-translate-x-14 scale-[90%] z-40"
                                                : ""
                                        }
                                         ${
                                             index ===
                                             indexCardsAround.twoPrevious
                                                 ? "-translate-x-24 scale-[80%] z-30"
                                                 : ""
                                         }
                                        
                                    `}
                                >
                                    <article className="bg-white p-6 rounded-lg shadow-2xl">
                                        <header className="mb-5">
                                            <h2 className="block antialiased tracking-normal font-sans sm:text-3xl text-4xl font-semibold leading-[1.3] text-slate-900 mb-4">
                                                Exercise ({index + 1}/
                                                {cardsData.length})
                                            </h2>
                                        </header>
                                        <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                            <label
                                                htmlFor="message"
                                                className="block mb-2 text-sm justify-items-end font-medium text-gray-900 dark:text-gray-400"
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            audioFragment.hints ??
                                                            "",
                                                    }}
                                                />
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="What did you here?"
                                                onKeyUp={(event) =>
                                                    evaluateAnswer(
                                                        event,
                                                        audioFragment,
                                                        index
                                                    )
                                                }
                                            ></textarea>

                                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                <button
                                                    type="button"
                                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() =>
                                                        sendTImefragmentToPlayer(
                                                            audioFragment
                                                        )
                                                    }
                                                >
                                                    Play ▷
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                >
                                                    Show hints
                                                </button>
                                            </div>
                                        </div>
                                        <footer className="flex justify-between">
                                            <button
                                                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
                                                    index > 0
                                                        ? ""
                                                        : "opacity-50 cursor-not-allowed"
                                                }`}
                                                disabled={index === 0}
                                                onClick={handlePrevious}
                                            >
                                                Prev
                                            </button>
                                            <button
                                                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
                                                    audioFragment.isApproved
                                                        ? ""
                                                        : "opacity-50 cursor-not-allowed"
                                                }`}
                                                disabled={
                                                    !audioFragment.isApproved
                                                }
                                                onClick={handleNext}
                                            >
                                                Next
                                            </button>
                                        </footer>
                                    </article>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
