export async function generateStaticParams() {
    return [{id: '1'}, {id:'2'}, {id:'3'}]
}

export default async function Page({ params, correct }) {
    const { id } = params
    return (
        <div>
            params: {id}
            <button onClick={correct}>
                ADD correct
            </button>
        </div>
    )
} 