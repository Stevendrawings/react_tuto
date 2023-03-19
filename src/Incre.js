import { useState } from "react";

function Incre(){
//state donne
const [incre, setIncre] = useState(1)

//comportement function
const removeFunct = () => {
    console.log(setIncre(incre + 1))
}

//Affichage render
return (
    <div>
        {incre}
        <button onClick={removeFunct}>Incrémentation</button>
    </div>
    )
}

export default Incre;