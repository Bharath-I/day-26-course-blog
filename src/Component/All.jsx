import { Cards } from "./Cards"
import data from "./data.json"
export function All() {
    return (
        <>
            <div className="Cards">
                {data.map((ele,index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster}/>
                })}
            </div>
        </>
    )
}