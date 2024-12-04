import React, { useState } from "react";
import { ExerciseCardsProps, FragmentAudioData } from "@/types";

export default function ExerciseCards({
    fragmentsAudioData,
    setFragmentAudioTime,
}: ExerciseCardsProps) {
    const [cardsData, setCardsData] = useState(fragmentsAudioData);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [indexCardsAround, setIndexCardsAround] = useState({
        oneNext: 1,
        twoNext: 2,
        onePrevious: cardsData.length - 1,
        twoPrevious: cardsData.length - 2,
    });

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

    const sanitizeText = (originalText: string) => {
        let sanitizedText = originalText
            .replace(/[,.?!]/g, "")
            .toLowerCase()
            .trim();
        return sanitizedText;
    };

    const evaluateAnswer = (
        event: any,
        audioFragment: FragmentAudioData,
        index: number
    ) => {
        if (event.key !== "Enter") return;

        const userAnswerSanitized = sanitizeText(event.target.value);
        const correctAnswerSanitized = sanitizeText(audioFragment.transcript);

        const userAnswerdWords = userAnswerSanitized.split(" ");
        const correctAnswerdWords = correctAnswerSanitized.split(" ");

        const hintList = ["✭"];
        let isFirstErrorSetted = false;
        for (let i = 0; i < correctAnswerdWords.length; i++) {
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
                    `<b class="text-red-300">${
                        audioFragment.transcript.split(" ")[i]
                    }</b>`
                );
                isFirstErrorSetted = true;
            }
        }

        const cardDataItemCopy = [...cardsData];
        cardDataItemCopy[index]["hints"] = hintList.join(" ");

        setCardsData(cardDataItemCopy);

        if (correctAnswerSanitized === userAnswerSanitized) {
            const cardDataItemCopy = [...cardsData];
            cardDataItemCopy[index]["isApproved"] = true;

            setCardsData(cardDataItemCopy);
        }
    };

    return (
        <div className=" ">
            <div className="w-full n-xs:min-w-[435px] max-w-lg mx-auto px-16 ">
                <div className="relative">
                    {cardsData.map(
                        (audioFragment: FragmentAudioData, index: number) => (
                            <div
                                key={index}
                                className={`
                                        absolute inset-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
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
                                <article className="bg-white p-4 shadow-md shadow-gray-400 rounded-md border border-opacity-30 border-gray-600 font-sans">
                                    <h2 className="block antialiased tracking-normal text-lg n-xs:text-2xl font-semibold leading-[1.3] text-slate-900 ">
                                        Exercise ({index + 1}/{cardsData.length}
                                        )
                                    </h2>
                                    <div className="leading-relaxed ">
                                        <div
                                            className={`flex ${
                                                audioFragment.isApproved
                                                    ? "text-green-600"
                                                    : "text-gray-400"
                                            }  `}
                                        >
                                            <div
                                                className="mb-3 text-[9px] n-xs:text-xs self-center"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        audioFragment.hints ??
                                                        "",
                                                }}
                                            />
                                        </div>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="block n-xs:h-full h-16 p-1.5 w-full text-[11px] n-xs:text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="What did you here?"
                                            onKeyUp={(event) =>
                                                evaluateAnswer(
                                                    event,
                                                    audioFragment,
                                                    index
                                                )
                                            }
                                        ></textarea>
                                        <div className="py-3 flex flex-row-reverse">
                                            <button
                                                type="button"
                                                className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-[10px] n-xs:text-sm w-auto ml-3 font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                                                onClick={() =>
                                                    setFragmentAudioTime({
                                                        ...audioFragment,
                                                    })
                                                }
                                            >
                                                Play ▷
                                            </button>
                                            <button
                                                type="button"
                                                className="w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 n-xs:px-4 py-2 bg-white text-[10px] n-xs:text-sm ml-3 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 "
                                            >
                                                Show hints
                                            </button>
                                        </div>
                                    </div>
                                    <footer className="flex justify-between">
                                        <button
                                            className={`bg-gray-300 hover:bg-gray-400 text-[10px] n-xs:text-sm text-gray-800 font-bold py-2 px-4 rounded ${
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
                                            className={`bg-gray-300 hover:bg-gray-400 text-[10px] n-xs:text-sm text-gray-800 font-bold py-2 px-4 rounded ${
                                                audioFragment.isApproved
                                                    ? ""
                                                    : "opacity-50 cursor-not-allowed"
                                            }`}
                                            disabled={!audioFragment.isApproved}
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
            </div>
        </div>
    );
}
