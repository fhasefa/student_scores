export default function Score({scores}) {
    // console.log({scores})
    return (
    <>
    {scores.map((item,index) =>
        <>
        <p key={index}>Date:{item.date} Grade:{item.score}</p>
        </>
    )}
    </>
    )
}