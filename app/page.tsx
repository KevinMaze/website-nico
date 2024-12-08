import { Button } from "./components/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../public/images/logo.png";

export const metadata = {
    title: "Nicolas Michon",
    description: "Monteur vidéo et copywriter",
    icons: {
        icon: "../public/images/logo.png",
    },
};

export default function Home() {
    return (
        <section className={styles.container}>
            <div className={styles.sectionLeft}>
                <div className={styles.overlay}></div>
                <div className={styles.buttonWrapper}>
                    <Button label="Montage" href="/AccueilMontage" />
                </div>
            </div>

            <Image
                src={Logo}
                alt="Logo Michon Nicolas"
                className={styles.logo}
            />

            <div className={styles.sectionRight}>
                <div className={styles.overlay}></div>
                <div className={styles.buttonWrapper}>
                    <Button label="Copywriting" href="/AccueilCopy" />
                </div>
            </div>
        </section>
    );
}
