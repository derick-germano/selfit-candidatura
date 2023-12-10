import React from 'react'
import Link from "next/link";
import YouTuveVideo from './YouTuveVideo';

export default function Aprensetacao() {
  return (
    <div id='apresentacao' className='bg-red-500 h-screen flex flex-col lg:flex-row justify-center items-center'>
      <div className='mt-10 sm:mt-0 mr-6 xl:mr-32'>
        <div className='w-80 sm:w-auto'>
          <p className="mb-2 2xl:text-2xl text-xl text-white font-medium">Olá pessoas,</p>
          <h1 className="mb-2 text-5xl text-white font-black max-w-sm">EU SOU DERICK GERMANO</h1>
          <p className=" mb- 2xl:text-2xl text-xl text-white font-medium">Seja bem-vindo a minha web candidatura para a Selfit</p>
          {/* <Link href="/sobre" className="text-base font-medium text-white pl-10 pr-10 p-3  rounded-lg bg-slate-600 ">Saiba mais sobre mim</Link> */}
        </div>          
      </div>

        <div className='mt-12 lg:mt-0'>
          <YouTuveVideo videoId="vDTvwdzFt30" />
        </div>

    </div>
  )
}
