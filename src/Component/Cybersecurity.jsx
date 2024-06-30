
import data from "./data.json";
import {Cards } from "./Cards"
export function Cybersecurity() {
   
    var x=data.filter((ele)=>{return ele.name==="Cyber Security"})
    return (
        <>
            <div className="Cards">
                {x.map((ele,index) => {
                    return <Cards key={index} name={ele.name} poster={ele.poster} />
                })}
            </div>
        </>
    )
}