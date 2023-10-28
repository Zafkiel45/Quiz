'use client'
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { myQuestionContext } from '../../(util)/context';
import Title from '@/app/question_make/title';
import Materia from '@/app/question_make/materia';
import Button from '@/app/question_make/button';

export default function Question1() {

    const router = useRouter()
    const { WrongAdd, CorrectAdd} = useContext(myQuestionContext)
    const [time, setTime] = useState(60);
    const timer = 1000
    setTimeout(() => {
        setTime(() => time - 1);
    }, timer)
    if(time <= 0) {
        window.alert('Tempo esgotado! Você perdeu.')
        clearTimeout(timer)
        router.push('/question/finally')
    }

    return (
        <div className='bg-zinc-800 w-[80vw] flex flex-col justify-center mt-10 gap-10 items-center h-fit p-8 rounded-md shadow-sm'>
            <Materia materia={`Matemática`} remaining_time={time} />
            <Title title={'dois zero, dois quatro'} />
            <div className='w-[80%] font-medium h-auto p-10 flex flex-wrap gap-5 bg-zinc-700 rounded-md shadow-sm items-center justify-center'>
                <Button url={`/question/question10`} answer={WrongAdd} cor={`bg-red-400`} alternativa={`2024`} />
                <Button url={`/question/question10`} answer={WrongAdd} cor={`bg-purple-400`} alternativa={`0044`} />
                <Button url={`/question/question10`} answer={CorrectAdd} cor={`bg-pink-400`} alternativa={`0024`} />
                <Button url={`/question/question10`} answer={WrongAdd} cor={`bg-blue-400`} alternativa={`2044`} />
            </div>
        </div>
    )
}