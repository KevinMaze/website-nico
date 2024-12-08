// import React, { useRef } from 'react'
import styles from "./Contact.module.css";
import clsx from "clsx";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "../components/Button";
// import emailjs from 'emailjs-com';

const Contact = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.send("service_7z5z5qo", "template_7z5z5qo", form.current, {
    //         publicKey:'',
    //     })
    //     e.target.reset();
    //     };

    return (
        <div className={styles.bg_img}>
            <div className={clsx(styles.container, "flux")}>
                <div className={styles.div__contact}>
                    <h2>Garder le contact</h2>

                    <div className={styles.contact__info}>
                        <div className={styles.contact__card}>
                            <BsFillEnvelopeAtFill />
                            <h4>E-mail</h4>
                            <a
                                href="mailto:"
                                className={styles.contact__button}
                            >
                                Ecrivez-moi
                                <BsArrowRight className={styles.arrow} />
                            </a>
                        </div>

                        <div className={styles.contact__card}>
                            <BsFillTelephoneFill />
                            <h4>Téléphone</h4>
                            <a
                                href="#"
                                className={styles.contact__button}
                                target="_blank"
                            >
                                Réservez votre appel
                                <BsArrowRight className={styles.arrow} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.div__contact}>
                    <h3>Décrivez votre projet</h3>
                    {/* onSubmit={""} */}
                    {/* ref={""} */}
                    <form className={styles.div__form}>
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className={styles.form__input}
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                className={styles.form__input}
                                placeholder="Votre Email"
                            />
                        </div>

                        <div className="contact__form-div">
                            <textarea
                                name="project"
                                id=""
                                className={clsx(
                                    styles.form__input,
                                    styles.area
                                )}
                                placeholder="Décrivez votre projet"
                            />
                        </div>

                        <Button label="Envoyer" variant="primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
