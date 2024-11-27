import Link from "next/link";


export default function WebMenu({ setActiveSection }: any) {
    return (
        <ul className="lg:flex space-x-6  hidden">
            <li>
                <Link
                    onClick={() => setActiveSection("home")}
                    href={"/home"}
                    className="hover:text-blue-600 transition-colors duration-700"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href={"/exercises"}
                    onClick={() => setActiveSection("exercises")}
                    className="hover:text-blue-600 transition-colors duration-700"
                >
                    Exercises
                </Link>
            </li>
        </ul>
    );
}
