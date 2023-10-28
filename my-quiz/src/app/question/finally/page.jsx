'use client'
import { useContext } from "react"
import { myQuestionContext } from "@/app/(util)/context"

export default function Finally() {

    const {wrong, correct, Restart} = useContext(myQuestionContext)

    return (
        <div className="bg-zinc-800 flex flex-col items-center gap-10 rounded-md w-[60vw] h-auto p-5 mt-[15%]">
            <div className="w-full text-center font-medium text-2xl">
                <h1>Seu resultado!</h1>
            </div>
            <div className="flex gap-5 justify-center w-full">
                <span className="bg-green-400 text-[#242424] w-fit h-fit py-1 px-2 flex items-center justify-center rounded-lg font-bold">Você acertou: {correct}</span>
                <span className="bg-red-400 text-[#242424] w-fit h-fit py-1 px-2 flex items-center justify-center rounded-lg font-bold">Você errou: {wrong}</span>
            </div>
            <button className="bg-blue-400 w-fit hover:scale-110 transition-transform py-2 px-3 h-fit rounded-md" onClick={Restart}>
                Tentar novamente
            </button>
        </div>
    )
}