
import data from "./data.json";
import {Cards } from "./Cards"
export function Datascience() {
    var x=data.filter((ele)=>{return ele.name==="DataScience"})
    return (
        <>
            <div className="Cards">
                {x.map((ele,index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster}/>
                })}
            </div>
        </>
    )
}