export default function MobileMenuList({ isMenuOpen }: any) {
    return (
        isMenuOpen && (
            <div className="lg:hidden">
                <ul className="space-y-4 mt-4 text-center">
                    <li>
                        <a
                            href="/"
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/exercises"
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
