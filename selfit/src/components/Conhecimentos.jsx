import React from 'react';

export default function Conhecimentos() {
  return (
    <div id='conhecimentos' className=''>
      <h2 className='flex justify-center p-10 text-2xl font-black'>MEUS CONHECIMENTOS</h2>

      <div className='flex flex-wrap lg:flex-row justify-center items-center font-medium mb-20'>
        <div className='w-20 text-center m-7'>
          <img className='h-20' src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
          <p className='mt-2'>Next.js</p>
        </div>

        <div className='w-20 text-center m-7'>
          <img className='h-20' src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
          <p className='mt-2'>React</p>
        </div>

        <div className='w-20 text-center m-7'>
          <img className='h-20' src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" />
          <p className='mt-2'>Javascript</p>
        </div>

        <div className='w-20 text-center m-7'>
          <img className='h-20' src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="" />
          <p className='mt-2'>Git</p>
        </div>

        <div className='w-20 text-center m-7'>
          <img className='h-20' src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
          <p className='mt-2'>Github</p>
        </div>
      </div>
    </div>
  );
}
