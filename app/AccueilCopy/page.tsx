import React from "react";
import styles from "./Accueil.module.css";
import clsx from "clsx";
import { Button } from "../components/Button";
import Image from "next/image";
import Profil from "../../public/images/profil.jpg";
import Logo from "../../public/images/logo.png";
import BGCopy from "../../public/images/bg-copy.jpg";
import Ordi from "../../public/images/ordi.jpg";

const AccueilCopy = () => {
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
                        <Image src={BGCopy} alt="Ordinateur" />
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
                    </div>
                </div>
            </div>

            <div className={styles.bg__gallery}>
                <div className={clsx(styles.gallery, "flux")}>
                    <h2>gallerie</h2>
                    <div className={styles.gallery__div}>
                        <Button label="Gallerie" href="/GallerieCopy" />
                        <Image src={Ordi} alt="Ordinateur" />
                    </div>
                </div>
            </div>

            <div className={styles.bg__about}>
                <div className={clsx(styles.about, "flux")}>
                    <h2>A Propos</h2>
                    <div className={styles.about__div}>
                        <Image src={Profil} alt="Image de profil" />
                        <Button label="A Propos" href="/About" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccueilCopy;
