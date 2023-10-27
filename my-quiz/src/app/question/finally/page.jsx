'use client'
import { useContext } from "react"
import { myQuestionContext } from "@/app/(util)/context"

export default function Finally() {

    const {wrong, correct, Restart} = useContext(myQuestionContext)

    return (
        <div>
            <h1>PARABÉNS</h1>
            você acertou: {correct}
            você errou: {wrong}
            <button className="bg-red-400" onClick={Restart}>
                Tentar novamente
            </button>
        </div>
    )
}