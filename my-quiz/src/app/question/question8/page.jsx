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
            <Materia materia={`Física`} remaining_time={time} />
            <Title title={'Quem foi Albert Einstein?'} />
            <div className='w-[80%] font-medium h-auto p-10 flex flex-wrap gap-5 bg-zinc-700 rounded-md shadow-sm items-center justify-center'>
                <Button url={`/question/question9`} answer={CorrectAdd} cor={`bg-red-400`} alternativa={`Um dos maiores físicos do século passado`} />
                <Button url={`/question/question9`} answer={WrongAdd} cor={`bg-purple-400`} alternativa={`Um dos maiores físicos do século atual`} />
                <Button url={`/question/question9`} answer={WrongAdd} cor={`bg-pink-400`} alternativa={`Um pedreiro`} />
                <Button url={`/question/question9`} answer={WrongAdd} cor={`bg-blue-400`} alternativa={`Era um pseudonimo de Nikolas Tesla`} />
            </div>
        </div>
    )
}