'use client'
import { useState } from "react"
import { questionContext } from "./util/context";
import Question from '../../question1'

export default function Dad() {

    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0)
    const teste = () => {
        setCorrect(() => correct + 1);
        window.alert(correct)
    }
    return (
        <>
            <questionContext.Provider>
                <Question />
            </questionContext.Provider>
        </>
    )
}