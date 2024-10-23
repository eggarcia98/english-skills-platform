import React, { Dispatch, SetStateAction, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import WebMenu from "./WebMenu";
import MobileMenuList from "./MobileMenu/MobilMenuList";

export default function NavBar({ setActiveSection, titlePage }: any) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 bg-white py-1 n-xs:px-40 px-4">
            <div className="container mx-auto flex justify-between items-center">
                <Logo titlePage={titlePage} />
                {/* Hamburger Icon for Mobile */}
                <MobileMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                {/* Desktop Menu Items */}
                <WebMenu setActiveSection={setActiveSection} />
            </div>

            {/* Mobile Menu List */}
            <MobileMenuList
                setActiveSection={setActiveSection}
                isMenuOpen={isMenuOpen}
            />
        </nav>
    );
}