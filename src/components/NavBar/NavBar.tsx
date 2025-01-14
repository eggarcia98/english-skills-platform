"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import WebMenu from "./WebMenu";
import MobileMenuList from "./MobileMenu/MobilMenuList";

export default function NavBar({ titlePage }: {titlePage: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 p-2 px-8 lg:px-40 bg-white bg-opacity-90">
            <div className="flex justify-between items-center">
                <Logo titlePage={titlePage} />
                {/* Hamburger Icon for Mobile */}
                <MobileMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                {/* Desktop Menu Items */}
                <WebMenu />
            </div>

            {/* Mobile Menu List */}
            <MobileMenuList isMenuOpen={isMenuOpen} />
        </nav>
    );
}
