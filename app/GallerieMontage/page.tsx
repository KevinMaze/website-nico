"use client"
import React, { useEffect, useState } from 'react'
import styles from './Gallerie.module.css'
import Image from 'next/image'
import Pexel1 from '../../public/images/pexel-1.jpg'
import Pexel2 from '../../public/images/pexel-2.jpg'
import Pexel3 from '../../public/images/acceuil-montage.jpg'
import clsx from 'clsx'

const images = [
    Pexel1,
    Pexel2,
    Pexel3,
    Pexel1,
    Pexel2,
    Pexel3,
    Pexel1,
    Pexel2,
    Pexel3
];


const GalleryMontage = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [modalPosition, setModalPosition] = useState<{ top: number, left: number }> ({ top: 0, left: 0 });

    const handleImageClick = (image: string, event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event; //coordonnées du click
        setSelectedImage(image);
        setModalPosition({ top: clientY, left: clientX }); //défini la position de la modal
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className={styles.bg__gallery}>

            <div className={clsx (styles.gallery, 'flux')}>
                <h1>Gallerie</h1>
                
                <div className={styles.gallery__grid}>
                    {images.map((image, index) => (
                        <div
                        key={index}
                        className={styles.imageWrapper}
                        onClick={() => handleImageClick(image, event)}
                        >
                            <Image src={image} alt={'Image ${index + 1}'} className={styles.image} width={250} height={350} layout='responsive' />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className={styles.modal} onClick={closeModal} style={{top: modalPosition.top, left:modalPosition.left, transform:"translate(-50%, -50%)",}}> 
                    {/*position de la modal */}
                        <Image src={selectedImage} alt='Selected Image' className={styles.modalImage}/>
                    </div>
                )}

            </div>
        </div>
    )
}

export default GalleryMontage;