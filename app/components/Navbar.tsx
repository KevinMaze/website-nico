"use client"; // Si vous utilisez le App Router de Next.js 13

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import {clsx} from "clsx";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {setMenuOpen((prev) => !prev)};

    const closeMenu = () => {setMenuOpen(false)};

    useEffect (() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {document.removeEventListener("mousedown", handleClickOutside)};
    }, [menuOpen]);


    const burgerClassName = clsx(styles.navLinks, menuOpen ? styles.show : "");
    const burgerLine = clsx(styles.burgerLine, menuOpen ? styles.open : "");

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Vérifie si on défile vers le bas (cacher la navbar) ou vers le haut (afficher la navbar)
        if (currentScrollY > scrollY && currentScrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setScrollY(currentScrollY);
        };

        // Ajoute un écouteur d'événement de scroll
        window.addEventListener("scroll", handleScroll);

        // Nettoie l'écouteur lors du démontage du composant
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <nav ref={navRef} className={`${styles.navbar} ${!isVisible ? styles.hidden : ""}`}>
            <Link href="/">< Image src={logo} alt="Logo Nicolas Michon" className={styles.logo}/></Link>
            <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
                <div className={burgerLine}></div>
                <div className={burgerLine}></div>
                <div className={burgerLine}></div>
            </button>
            <ul className={burgerClassName}>
                <li onClick={closeMenu}><Link href="/AccueilMontage" className={styles.line}>Accueil Montage</Link></li>
                <li onClick={closeMenu}><Link href="/GallerieMontage" className={styles.line}>Gallerie</Link></li>
                <li onClick={closeMenu}><Link href="/About" className={styles.line}>A Propos</Link></li>
                <li onClick={closeMenu}><Link href="/Contact" className={styles.line}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
