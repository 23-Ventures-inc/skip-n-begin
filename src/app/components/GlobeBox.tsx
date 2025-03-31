import React from 'react';
import Earth from './Globe';

function GlobeBox() {
  return (
    <>
      <div className='overflow-hidden'>
        <article className='max-w-full mx-auto p-3 text-center relative'>
          <div className='relative z-10'>
            <h1 className='text-4xl md:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
              Skip-n-Begin
            </h1>
            <Earth />
          </div>
        </article>
      </div>
    </>
  );
}

export default GlobeBox;