'use client';

import Link from "next/link";
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className="bg-black/80 border-b border-red-800 text-white py-4 shadow-[0_0_10px_rgba(255,0,51,0.5)] sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between md:justify-start relative">
                    {/* Logo/Site name on the left */}
                    <div className="text-xl font-bold neon-red-text">KLIRK</div>

                    {/* Mobile menu button - aligned to the right */}
                    <button
                        className="md:hidden text-white hover:text-red-500 transition focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation - centered */}
                    <nav className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <ul className="flex justify-center space-x-8">
                            <li>
                                <Link href="/#home" className="hover:text-red-500 transition relative group">
                                    Home
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full group-hover:shadow-[0_0_5px_rgba(255,0,51,0.7)]"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills" className="hover:text-red-500 transition relative group">
                                    Skills
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full group-hover:shadow-[0_0_5px_rgba(255,0,51,0.7)]"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:text-red-500 transition relative group">
                                    Projects
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full group-hover:shadow-[0_0_5px_rgba(255,0,51,0.7)]"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-red-500 transition relative group">
                                    Contact
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full group-hover:shadow-[0_0_5px_rgba(255,0,51,0.7)]"></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Navigation - full width dropdown */}
                    {isMenuOpen && (
                        <nav
                            className="md:hidden absolute top-full left-0 right-0 bg-black/90 border-t border-red-800 mt-4 py-4 z-50">
                            <ul className="flex flex-col items-center space-y-4">
                                <li>
                                    <Link
                                        href="/#home"
                                        className="hover:text-red-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#skills"
                                        className="hover:text-red-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#projects"
                                        className="hover:text-red-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#contact"
                                        className="hover:text-red-500 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
} 