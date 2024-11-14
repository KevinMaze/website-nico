"use client"; // Si vous utilisez le App Router de Next.js 13

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
        <div className={styles.logo}>Logo</div>
        <ul className={styles.navLinks}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
