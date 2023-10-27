'use client'
import { myQuestionContext } from "../(util)/context"
import { useState } from 'react'
import { useRouter } from "next/navigation";

export default function Question({children}) {

    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const Router = useRouter()

    const WrongAdd = () => {
        setWrong(() => wrong + 1);
    }
    const CorrectAdd = () => {
        setCorrect(() => correct + 1)
    }
    const Restart = () => {
        setWrong(0);
        setCorrect(0)
        Router.push('/')
    }

    return (
        <myQuestionContext.Provider value={{WrongAdd, CorrectAdd, Restart, correct, wrong}}>
            {children}
        </myQuestionContext.Provider>
    )
}