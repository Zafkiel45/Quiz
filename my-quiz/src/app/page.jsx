import Link from "next/link"

export default function Home() {
    return (
    <>
      <div className="w-[50vw] mt-[10%] flex flex-col gap-10 items-center">
        <div className="w-full">
          <h1 className="text-center font-medium text-4xl">Quiz Básico!</h1>
        </div>
        <div className="w-full bg-zinc-700 p-5 rounded-md">
            Teste sua habilidades neste quiz com várias questões dos temas mais variados. 
            <br />
            <br />
            Você terá 30 segundos para responder cada questão. Quando completar o Quiz o
            resulto será mostrado. Good Luck!
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href={`/question/question1`} >   
            <button className="bg-blue-500 w-fit py-3 active:relative active:bottom-[-2px] font-medium px-5 rounded-sm">
                Começar o teste
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
