import React from 'react';
import Earth from './Globe';

function GlobeBox() {
  return (
    <>
      <div className='overflow-hidden'>
        <article className='max-w-full mx-auto p-3 text-center relative'>
          <div className='relative z-10'>
            <h1 className='text-4xl md:text-7xl font-semibold text-blue-300 opacity-70'>
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