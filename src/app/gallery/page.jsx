import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            This is the gallery we want to visit every vacation

           {
             [2,3,4,5].map((img)=> <Image key={"img"} src={`/${img}.png`} alt="Image" width={500} height={500} />)
           }
            
            {/* <Image src="/2.png" alt="Image" width={500} height={500} /> */}
        </div>
    );
};

export default GalleryPage;
