import React, { useState } from "react";

const dataDemo = [
    {
        audio_end_time: 17.0,
        audio_start_time: 12.0,
        chunk_start_time: 0.0,
        transcript: "so what's newmark how is your new job going",
    },
    {
        audio_end_time: 21.0,
        audio_start_time: 17.0,
        chunk_start_time: 0.0,
        transcript: "to be honest I can't complain",
    },
    {
        audio_end_time: 25.0,
        audio_start_time: 21.0,
        chunk_start_time: 0.0,
        transcript: "I really love the company that I am working for",
    },
    {
        audio_end_time: 29.0,
        audio_start_time: 25.0,
        chunk_start_time: 0.0,
        transcript: "my coworkers are all really friendly",
    },
    {
        audio_end_time: 30.0,
        audio_start_time: 29.0,
        chunk_start_time: 0.0,
        transcript: "and helpful",
    },
    {
        audio_end_time: 35.0,
        audio_start_time: 30.0,
        chunk_start_time: 30.0,
        transcript: "they really help me feel welcome it's a really",
    },
    {
        audio_end_time: 39.0,
        audio_start_time: 35.0,
        chunk_start_time: 30.0,
        transcript: "energetic and fun atmosphere my",
    },
    {
        audio_end_time: 43.0,
        audio_start_time: 39.0,
        chunk_start_time: 30.0,
        transcript: "boss is hilarious and he's really flexible",
    },
    {
        audio_end_time: 47.0,
        audio_start_time: 43.0,
        chunk_start_time: 30.0,
        transcript: "really how so",
    },
    {
        audio_end_time: 51.0,
        audio_start_time: 47.0,
        chunk_start_time: 30.0,
        transcript: "he allows me to come in when I want",
    },
    {
        audio_end_time: 55.0,
        audio_start_time: 50.0,
        chunk_start_time: 30.0,
        transcript: "find and make my own hours I can also",
    },
    {
        audio_end_time: 59.0,
        audio_start_time: 55.0,
        chunk_start_time: 30.0,
        transcript: "leave early if I start early there is no",
    },
    {
        audio_end_time: 60.0,
        audio_start_time: 59.0,
        chunk_start_time: 30.0,
        transcript: "real dress code",
    },
    {
        audio_end_time: 65.0,
        audio_start_time: 60.0,
        chunk_start_time: 60.0,
        transcript: "I can wear jeans and a t-shirt if I want",
    },
    {
        audio_end_time: 69.0,
        audio_start_time: 64.0,
        chunk_start_time: 60.0,
        transcript: "I can even wear shorts in the summer wow",
    },
    {
        audio_end_time: 73.0,
        audio_start_time: 69.0,
        chunk_start_time: 60.0,
        transcript: "it sounds really cool",
    },
    {
        audio_end_time: 77.0,
        audio_start_time: 72.0,
        chunk_start_time: 60.0,
        transcript: "I can't stand wearing a suit every day",
    },
    {
        audio_end_time: 81.0,
        audio_start_time: 76.0,
        chunk_start_time: 60.0,
        transcript: "which do you prefer working late or finishing",
    },
    {
        audio_end_time: 85.0,
        audio_start_time: 81.0,
        chunk_start_time: 60.0,
        transcript: "early I prefer finishing early",
    },
    {
        audio_end_time: 89.0,
        audio_start_time: 84.0,
        chunk_start_time: 60.0,
        transcript: "I really enjoy the morning I love getting up",
    },
    {
        audio_end_time: 90.0,
        audio_start_time: 89.0,
        chunk_start_time: 60.0,
        transcript: "early and going",
    },
    {
        audio_end_time: 95.0,
        audio_start_time: 90.0,
        chunk_start_time: 90.0,
        transcript:
            "for a run there's nothing like watching the sunrise while drink",
    },
    {
        audio_end_time: 99.0,
        audio_start_time: 95.0,
        chunk_start_time: 90.0,
        transcript: "ing my morning coffee really",
    },
    {
        audio_end_time: 103.0,
        audio_start_time: 98.0,
        chunk_start_time: 90.0,
        transcript: "play I am opposite I love",
    },
    {
        audio_end_time: 107.0,
        audio_start_time: 103.0,
        chunk_start_time: 90.0,
        transcript: "sleeping in I am most alert in the",
    },
    {
        audio_end_time: 111.0,
        audio_start_time: 107.0,
        chunk_start_time: 90.0,
        transcript: "evenings I'm a real night owl",
    },
    {
        audio_end_time: 119.0,
        audio_start_time: 114.0,
        chunk_start_time: 90.0,
        transcript: "well you know what they say the early bird catches the",
    },
    {
        audio_end_time: 120.0,
        audio_start_time: 119.0,
        chunk_start_time: 90.0,
        transcript: "worm",
    },
    {
        audio_end_time: 125.0,
        audio_start_time: 120.0,
        chunk_start_time: 120.0,
        transcript: "you know you could be right maybe I will try to go",
    },
    {
        audio_end_time: 129.0,
        audio_start_time: 125.0,
        chunk_start_time: 120.0,
        transcript: "to bed a little earlier tonight",
    },
];

export default function ExerciseCards({ audioSummary }: any) {
    const [cardsData, setCardsData] = useState(dataDemo);

    const [currentIndex, setCurrentIndex] = useState(0); // Initialize with the first card
    const [indexCardsAround, setIndexCardsAround] = useState({
        oneNext: 1,
        twoNext: 2,
        onePrevious: cardsData.length - 1,
        twoPrevious: cardsData.length - 2,
    }); // Initialize with the first card

    const evaluateUserAnswer = () => {
        return true
    }

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

        console.log({ ...indexCardsAround, currentIndex });
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            console.log({ prevIndex });
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

    return (
        <div className="relative font-inter antialiased">
            <div className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
                <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                    <section className="px-12">
                        <div className="max-w-lg mx-auto relative">
                            {cardsData.map(
                                ({ transcript }: any, index: number) => (
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
                                                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-slate-900 mb-4">
                                                    Exercise ({index + 1}/
                                                    {cardsData.length})
                                                </h2>
                                            </header>
                                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                                {/* <label
                                                htmlFor="message"
                                                className="block mb-2 text-sm justify-items-end font-medium text-gray-900 dark:text-gray-400"
                                            >
                                                Words to guess: 
                                            </label> */}
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="What did you here?"
                                                ></textarea>

                                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="button"
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={evaluateUserAnswer}
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
                                                    className="text-sm font-medium text-indigo-500 hover:underline "
                                                    onClick={handlePrevious}
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    className="text-sm font-medium text-indigo-500 hover:underline"
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
        </div>
    );
}
