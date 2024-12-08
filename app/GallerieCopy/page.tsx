import React from "react";
import styles from "./Gallerie.module.css";
import Image from "next/image";
import Ordi from "../../public/images/ordi.jpg";
import Writing from "../../public/images/writing.jpg";
import BGCopy from "../../public/images/bg-copy.jpg";

const GalleryCopy = () => {
    return (
        <div className={styles.bg__gallery}>
            <div className={styles.gallery}>
                <h1>Gallerie</h1>

                <div className={styles.gallery__grid}>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Ordi}
                            alt="Image 1"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Writing}
                            alt="Image 2"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={BGCopy}
                            alt="Image 3"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Ordi}
                            alt="Image 4"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Writing}
                            alt="Image 5"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={BGCopy}
                            alt="Image 6"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Ordi}
                            alt="Image 7"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={Writing}
                            alt="Image 8"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={BGCopy}
                            alt="Image 9"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCopy;
