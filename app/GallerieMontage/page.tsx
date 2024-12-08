"use client";
import styles from "./Gallerie.module.css";
import Image from "next/image";
import Pexel1 from "../../public/images/pexel-1.jpg";
import Pexel2 from "../../public/images/pexel-2.jpg";
import Pexel3 from "../../public/images/acceuil-montage.jpg";

const GalleryMontage = () => {
    return (
        <div className={styles.bg__gallery}>
            <div className={styles.gallery}>
                <h1>Gallerie</h1>

                <div className={styles.gallery__grid}>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel1}
                            alt="Image 1"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel2}
                            alt="Image 2"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel3}
                            alt="Image 3"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel1}
                            alt="Image 4"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel2}
                            alt="Image 5"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel3}
                            alt="Image 6"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel1}
                            alt="Image 7"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel2}
                            alt="Image 7"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Pexel3}
                            alt="Image 7"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryMontage;
