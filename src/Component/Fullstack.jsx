import data from "./data.json";
import { Cards } from "./Cards"
export function Fullstack() {
    
    var x = data.filter((ele) => { return ele.name === "FullStack Development" })
    return (
        <>
            <div className="Cards">
                {x.map((ele, index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster} />
                })}
            </div>
        </>
    )
}