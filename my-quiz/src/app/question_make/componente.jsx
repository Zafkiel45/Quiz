'use client'
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { myQuestionContext } from '../(util)/context';
import Link from 'next/link';


export default function Componente({question, materia, question1, question2, question3, question4, hit, error}) {

    const router = useRouter()
    const { WrongAdd, CorrectAdd, wrong, correct } = useContext(myQuestionContext)
    const [time, setTime] = useState(30);
    const timer = 1000
    // setTimeout(() => {
    //     setTime(() => time - 1);
    // }, timer)

    if(time <= 0) {
        window.alert('Tempo esgotado! Você perdeu.')
        clearTimeout(timer)
        router.push('/')
    }

    return (
        <div className='bg-zinc-800 w-[80vw] flex flex-col justify-center mt-10 gap-10 items-center h-fit p-8 rounded-md shadow-sm'>
            <div className='flex items-center'>
                <span className='font-medium text-2xl pr-8'>{materia}</span> | <span className='pl-3' style={{color: time <=10 ? 'rgb(248 113 113)':'rgb(74 222 128)'}}>Tempo Restante {time}</span>
            </div>
            <div className="bg-zinc-700 text-center w-[80%] rounded-sm p-5">
                <span className='font-medium text-xl pr-10' >{question}</span> 
            </div>
            <div className='w-[80%] font-medium h-auto p-10 flex flex-wrap gap-5 bg-zinc-700 rounded-md shadow-sm items-center justify-center'>
                <Link href={'#'} onClick={error} className='bg-red-400 rounded-md w-[45%] h-32 hover:scale-105 transition-transform active:relative active:bottom-[-2px]'>
                    <div className='h-32'>
                        <button className="rounded-md h-full flex items-center justify-center w-full">{question1}</button>
                    </div>
                </Link>
                <Link href={'#'} onClick={''} className='bg-purple-400 rounded-md w-[45%] h-32 hover:scale-105 transition-transform active:relative active:bottom-[-2px]'>
                    <div className='h-32'>
                        <button className="rounded-md h-full flex items-center justify-center w-full">{question2}</button>
                    </div>                
                </Link>
                <Link href={'#'} onClick={error} className='bg-pink-400 rounded-md w-[45%] h-32 hover:scale-105 transition-transform active:relative active:bottom-[-2px]'>
                    <div className='h-32'>
                        <button className="rounded-md h-full flex items-center justify-center w-full">{question3}</button>
                    </div>                
                </Link>
                <Link href={'#'} onClick={error} className='bg-blue-400 rounded-md w-[45%] h-32 hover:scale-105 transition-transform active:relative active:bottom-[-2px]'>
                    <div className='h-32'>
                        <button className="rounded-md  h-full flex items-center justify-center w-full">{question4}</button>
                    </div>                
                </Link>
                
            </div>
        </div>
    )
}