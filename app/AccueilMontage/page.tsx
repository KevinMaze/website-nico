import React from "react";
import styles from "./Accueil.module.css";
import clsx from "clsx";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import ImgTitle from "../../public/images/bg-montage.jpg";
import Pexel from "../../public/images/pexel-1.jpg";
import Profil from "../../public/images/profil.jpg";
import { Button } from "../components/Button";

const AccueilMontage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg__logo}>
                <Image
                    src={Logo}
                    alt="Logo Michon Nicolas"
                    className={styles.logo}
                />
            </div>

            <div className={styles.bg__title}>
                <div className={clsx(styles.title, "flux")}>
                    <h2>title</h2>

                    <div className={styles.title__div}>
                        <p>
                            Lorem ipsum dolor sit amet. Qui molestiae animi et
                            omnis dolorem qui dignissimos fugit in nostrum
                            velit. Nam expedita voluptatem est adipisci corporis
                            aut modi facere eos velit quod et numquam laboriosam
                            sit galisum minus. Est reiciendis sint et rerum sunt
                            est recusandae quisquam id voluptate voluptatibus et
                            iure assumenda et dolorem suscipit! Ea similique
                            nihil et eligendi tenetur ut velit aliquid non
                            aperiam nostrum aut debitis incidunt 33 velit ipsum.
                            At consectetur fuga sed dolore reprehenderit et
                            dolores voluptatibus qui nisi incidunt ut animi
                            maiores. At debitis delectus aut recusandae sapiente
                            quo temporibus consequatur ut saepe necessitatibus
                            et officiis autem sed deleniti perferendis aut iusto
                            esse. Et consectetur provident eos tempore quia hic
                            beatae cumque in consequuntur voluptas ut
                            reprehenderit quasi in tempore dignissimos. Vel
                            debitis sint sit autem asperiores est voluptate
                            delectus aut dolore odio cum minima officia ut quia
                            culpa! Qui placeat omnis et eaque odio aut nesciunt
                            officia ex error internos. Est natus laborum et
                            expedita tempora eos minus eius. Et eius corporis
                            est quidem quidem aut quasi quaerat et quia nostrum
                            ad tempora pariatur ut animi quibusdam sed
                            perspiciatis Quis.
                        </p>
                        <Image
                            src={ImgTitle}
                            alt="Template de montage"
                            className={styles.imgTitle}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.bg__gallery}>
                <div className={clsx(styles.gallery, "flux")}>
                    <h2>gallery</h2>

                    <div className={styles.gallery__div}>
                        <Image
                            src={Pexel}
                            alt="Image de la gallery"
                            className={styles.imgGallery}
                        />
                        <Button label="Gallery" href="/GallerieMontage" />
                    </div>
                </div>
            </div>

            <div className={styles.bg__about}>
                <div className={clsx(styles.about, "flux")}>
                    <h2>a propos</h2>

                    <div className={styles.about__div}>
                        <Button
                            label="A Propos"
                            href="/About"
                            variant="secondary"
                        />
                        <Image src={Profil} alt="Image de profil" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccueilMontage;
