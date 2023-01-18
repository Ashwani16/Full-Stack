export default function Pages({page,inc,dec}){
    return <div>
        <button disabled={page<2} onClick={()=>{dec()}}>-</button>
        <button disabled>{page}</button>
        <button onClick={()=>{inc()}}>+</button>
    </div>
}