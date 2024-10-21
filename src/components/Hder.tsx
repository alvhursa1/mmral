import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hder: React.FC = () => {
  return (
    <header className="
      sticky top-0 w-full bg-white z-50 shadow-md
      /* Altura del header - Mobile */
      h-14
      /* Altura del header - Desktop */
      md:h-20
    ">
      <div className="
        flex items-center  h-full 
        /* Padding del contenedor - Mobile */
        px-[8%]
        /* Padding del contenedor - Desktop */
        md:px-[5%]
      ">
        <Link href="/" className="
          /* Tamaño del contenedor del logo - Mobile */
          w-44 h-auto
          /* Tamaño del contenedor del logo - Desktop */

          /* Padding del logo - Mobile */
          py-4
          /* Padding del logo - Desktop */
          md:py-3
        ">
          <Image
            src="/images/LogoMemeorial.svg"
            alt="Logo Memeorial"
            width={500}
            height={40}
            className="
              w-full h-auto
              object-contain
            "
          />
        </Link>
      </div>
    </header>
  );
};

export default Hder;