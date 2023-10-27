import Link from "next/link"

export default function Button({alternativa, cor, answer, url}) {
    return (
        <>
            <Link href={url} onClick={answer} className={`${cor} rounded-md w-[45%] h-32 hover:scale-105 transition-transform active:relative active:bottom-[-2px]`}>
                <div className='h-32'>
                    <button className="rounded-md h-full flex items-center justify-center w-full">{alternativa}</button>
                </div>
            </Link>
        </>
    )
}