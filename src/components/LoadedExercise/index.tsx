import { useEffect, useState } from "react";

export default function LoadedExercise() {
    const [loadedExercises, setLoadedExercises] = useState([]);

    const fetchLoadedExercises = () => {
        fetch("https://saavn.dev/api/search/songs?query=Adele&limit=6")
            .then((res) => {
                console.log("TRY");
                return res.json();
            })
            .then(({ data, error }) => {
                const { results } = data;
                setLoadedExercises(results);
            })
            .catch((error) => error);
    };

    useEffect(() => fetchLoadedExercises(), []);

    return (
        <div className="my-16 text-left grid grid-cols-1">
            <h1>Try Exercises performed by other students</h1>
            <button className="grid grid-cols-3 gap-5 my-8 ">
                {loadedExercises.map(({ name, duration }: any) => (
                    <div className="grid grid-cols-[auto_1fr] border rounded-lg ">
                        <div className="px-4 border-r flex flex-col justify-center">PLAY</div>
                        <div className="p-2 flex flex-col justify-center">
                            <div className="">{name}</div>
                            <div className=""> {duration}</div>
                        </div>
                    </div>
                ))}
            </button>
            <div className="my-1 px-5 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img
                            alt="Placeholder"
                            className="block h-auto w-full"
                            src="https://picsum.photos/600/400/?random"
                        />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a
                                className="no-underline hover:underline text-black"
                                href="#"
                            >
                                Article Title
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a
                            className="flex items-center no-underline hover:underline text-black"
                            href="#"
                        >
                            <img
                                alt="Placeholder"
                                className="block rounded-full"
                                src="https://picsum.photos/32/32/?random"
                            />
                            <p className="ml-2 text-sm">Author Name</p>
                        </a>
                        <a
                            className="no-underline text-grey-darker hover:text-red-dark"
                            href="#"
                        >
                            <span className="hidden">Like</span>
                            <i className="fa fa-heart"></i>
                        </a>
                    </footer>
                </article>
            </div>
        </div>
    );
}
