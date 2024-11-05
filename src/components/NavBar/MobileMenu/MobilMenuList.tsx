export default function MobileMenuList({ isMenuOpen, setActiveSection }: any) {
    return (
        isMenuOpen && (
            <div className="lg:hidden">
                <ul className="space-y-4 mt-4 text-center">
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
                            href="#"
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
