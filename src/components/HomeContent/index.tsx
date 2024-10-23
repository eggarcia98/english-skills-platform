export default function HomeContent({ setActiveSection }: any) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                Simple, Customizable, and Easy to use
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                <br />
                This tool helps improve your English listening skills using your
                favorite series or even your own audio files.
                <br />
                <br />
                All you need is a YouTube link to the video or audio you want to
                practice with, or you can upload an audio file directly from
                your device
            </p>
            <button
                onClick={() => setActiveSection("exercises")}
                className="px-8 py-3 bg-blue-600 text-white text-sm rounded-md shadow-sm hover:bg-blue-700 transition-all duration-300"
            >
                Get Started
            </button>
        </div>
    );
}