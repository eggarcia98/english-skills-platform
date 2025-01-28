import Link from "next/link";


export default function WebMenu() {
    return (
        <ul className="lg:flex space-x-6  hidden">
            <li>
                <Link
                    href={"/"}
                    className="hover:text-blue-600 transition-colors duration-700"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href={"/exercises"}
                    className="hover:text-blue-600 transition-colors duration-700"
                >
                    Exercises
                </Link>
            </li>
        </ul>
    );
}
