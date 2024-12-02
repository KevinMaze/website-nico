import React from 'react'
import styles from './Contact.module.css'
import clsx from 'clsx'

const Contact = () => {
    return (
        <div className={clsx (styles.container, 'flux')}>
            <div className={styles.div__form}>
                <h2>Garder le contact</h2>
                <div className={styles.contact__info}>
                    <div className={styles.contact__card}>
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h4>E-mail</h4>
                        <a href="mailto:kevinmaze0889@gmail.com" className="contact__button">Ecrivez-moi
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className={styles.contact__card}>
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h4>Téléphone</h4>
                        <a href="https://calendly.com/kevinmaze0889/30min" className="contact__button" target='_blank'>Réservez votre appel
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.div__form}>
                <h3>Décrivez votre projet</h3>
                <form action="">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;