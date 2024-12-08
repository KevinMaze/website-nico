import React from 'react'
import styles from './Accueil.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const AccueilMontage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.bg__logo}>
                <Image src={Logo} alt='Logo Michon Nicolas' className={styles.logo} />
            </div>

            <div className={styles.bg__title}>
                <div className={clsx (styles.title, 'flux')}>

                </div>
            </div>

            <div className={styles.bg__gallery}>
                <div className={clsx (styles.gallery, 'flux')}>

                </div>
            </div>

            <div className={styles.bg__about}>
                <div className={clsx (styles.about, 'flux')}>

                </div>
            </div>

        </div>
    )
}

export default AccueilMontage;