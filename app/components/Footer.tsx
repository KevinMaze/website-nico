
import Link from "next/link";
import styles from "./Footer.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import  Facebook from "../../public/images/facebook.png";
import Insta from "../../public/images/insta.png";
import In from "../../public/images/linkedin.png";
import X from "../../public/images/x.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/"><Image src={logo} alt="Logo Nicolas Michon" className={styles.logo}/></Link>
            <p>@Copywrite 2024</p>
            <div className={styles.navLinks}>
                <a href="https://www.facebook.fr" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">< Image src={Facebook} alt="logo facebook" className={styles.link}/></a>
                <a href="https:/www.instagram.com" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">< Image src={Insta} alt="logo instagram" className={styles.link}/></a>
                <a href="https://www.linkedin.com" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">< Image src={In} alt="logo linkedin" className={styles.link}/></a>
                <a href="https://www.twitter.com" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">< Image src={X} alt="logo x/twitter" className={styles.link}/></a>
            </div>
        </footer>
    );
};

export default Footer;