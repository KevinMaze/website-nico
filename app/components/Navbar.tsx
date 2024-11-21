"use client"; // Si vous utilisez le App Router de Next.js 13

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);

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
        <nav className={`${styles.navbar} ${!isVisible ? styles.hidden : ""}`}>
            <Link href="/">< Image src={logo} alt="Logo Nicolas Michon" className={styles.logo}/></Link>
            <ul className={styles.navLinks}>
                <li><Link href="/AccueilMontage">Accueil Montage</Link></li>
                <li><Link href="/GallerieMontage">Gallerie</Link></li>
                <li><Link href="/About">A Propos</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
