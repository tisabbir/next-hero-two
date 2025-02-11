import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            This is the gallery we want to visit every vacation
            
            <Image src="/2.png" alt="Image" width={500} height={500} />
        </div>
    );
};

export default GalleryPage;
