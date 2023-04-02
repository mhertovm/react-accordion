import { useState } from "react"

function Accordion({name, capital, index}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <div key={index}>
            <div className="accordion" onClick={()=> setIsActive(!isActive)}>
                {name}
                {isActive ? "+" : "-"}
            </div>
            {isActive && <div style={{color: "red"}}>{capital}</div>}
        </div>
    )
}

export default Accordion