export default function MobileMenuList({ isMenuOpen, setActiveSection }: any) {
    return (
        isMenuOpen && (
            <div className="lg:hidden">
                <ul className="space-y-4 text-center mt-4">
                    <li>
                        <a
                            href="/"
                            onClick={() => setActiveSection("home")}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/exercises"
                            onClick={() => setActiveSection("exercises")}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Excersise
                        </a>
                    </li>
                </ul>
            </div>
        )
    );
}
