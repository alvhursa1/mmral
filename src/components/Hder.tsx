import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hder = () => {
  return (
    <header className="sticky top-0 w-full bg-white py-[2%] pl-[2%] flex items-center z-50 shadow-md">
      <div className="pl-3">
        <Link href="/">
          <Image
            src="/images/LogoMemeorial.svg"
            alt="Logo Memeorial"
            width={197}
            height={29}
            className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 xl:w-56"
          />
        </Link>
      </div>
    </header>
  );
};

export default Hder;