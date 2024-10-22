import Image from "next/image";

export default function Logo({ titlePage }: { titlePage: string }) {
    return (
        <div className="container flex items-center">
            <Image
                src="/logo.png" // The path should be relative to the 'public' folder
                alt="A descriptive alt text"
                className="mr-3"
                width={50} // Define width
                height={50} // Define height
            />
            <h1 className="text-xl font-semibold tracking-wide">{titlePage}</h1>
        </div>
    );
}