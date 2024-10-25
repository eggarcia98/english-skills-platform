export default function WebMenu({ setActiveSection }: any) {
    return (
        <ul className="lg:flex space-x-6  hidden">
            <li>
                <button
                    onClick={() => setActiveSection("home")}
                    className="hover:text-blue-600 transition-colors duration-300"
                >
                    Home
                </button>
            </li>
            <li>
                <button
                    onClick={() => setActiveSection("exercises")}
                    className="hover:text-blue-600 transition-colors duration-300"
                >
                    Exercises
                </button>
            </li>
        </ul>
    );
}