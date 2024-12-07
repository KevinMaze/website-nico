import React from 'react'
import styles from './Accueil.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const AccueilMontage = () => {
    return (
        <div className='flux'>

            <div className={styles.bg__logo}>
                <Image src={Logo} alt='Logo Michon Nicolas' />
            </div>

            <div className={styles.bg__title}>
                <div className={styles.title}>

                </div>
            </div>

        </div>
    )
}

export default AccueilMontage;