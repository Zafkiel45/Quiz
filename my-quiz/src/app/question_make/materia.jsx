export default function Materia({materia, remaining_time}) {
    return (
        <div className='flex items-center'>
            <span className='font-medium text-2xl pr-8'>{materia}</span> | <span className='pl-3' style={{color: remaining_time <=10 ? 'rgb(248 113 113)':'rgb(74 222 128)'}}>Tempo Restante: {remaining_time}</span>
        </div>
    )
}