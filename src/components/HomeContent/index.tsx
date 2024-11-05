export default function HomeContent({ setActiveSection }: any) {
    return (
        <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900  mb-8">
                Simple, Customizable, and Easy to use
            </h2>
            <div className="text-lg text-gray-600 mb-6 space-y-4 max-w-2xl mx-auto">
                <div>
                    This tool helps improve your English listening skills using
                    your favorite series or even your own audio files.
                </div>
                <div>
                    All you need is a YouTube link to the video or audio you
                    want to practice with, or you can upload an audio file
                    directly from your device
                </div>
            </div>
            <button
                onClick={() => setActiveSection("exercises")}
                className="px-8 py-3 bg-blue-600 text-white text-sm rounded-md shadow-sm hover:bg-blue-700 transition-all duration-300"
            >
                Get Started
            </button>
        </div>
    );
}
