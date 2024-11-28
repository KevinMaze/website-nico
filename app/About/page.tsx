import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import  Profil  from '../../public/images/profil.jpg'
import clsx from 'clsx'

const About = () => {
    return (
        <div className={clsx (styles.container, 'flux')}>
            <div className={styles.profil}>
                <h2>A Propos de moi</h2>
                <Image src={Profil} alt="Photo de profil" className={styles.img} />
            </div>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet. Qui molestiae animi et omnis dolorem qui dignissimos fugit in nostrum velit. Nam expedita voluptatem est adipisci corporis aut modi facere eos velit quod et numquam laboriosam sit galisum minus. Est reiciendis sint et rerum sunt est recusandae quisquam id voluptate voluptatibus et iure assumenda et dolorem suscipit! Ea similique nihil et eligendi tenetur ut velit aliquid non aperiam nostrum aut debitis incidunt 33 velit ipsum.
                At consectetur fuga sed dolore reprehenderit et dolores voluptatibus qui nisi incidunt ut animi maiores. At debitis delectus aut recusandae sapiente quo temporibus consequatur ut saepe necessitatibus et officiis autem sed deleniti perferendis aut iusto esse. Et consectetur provident eos tempore quia hic beatae cumque in consequuntur voluptas ut reprehenderit quasi in tempore dignissimos.
                Vel debitis sint sit autem asperiores est voluptate delectus aut dolore odio cum minima officia ut quia culpa! Qui placeat omnis et eaque odio aut nesciunt officia ex error internos. Est natus laborum et expedita tempora eos minus eius. Et eius corporis est quidem quidem aut quasi quaerat et quia nostrum ad tempora pariatur ut animi quibusdam sed perspiciatis Quis.</p>
            </div>
        </div>
    )
}

export default About;