import { useState } from "react";

const List =()=>{
    //DATA
    const [fruits, setFruits] = useState([
        {id: 1, nom: "Abricot"},
        {id: 2, nom: "Bannane"},
        {id: 3, nom: "Cerise"}
    ])
    //COMPORTEMENTS
    const removeLink = (id) =>{
        // copie du state.
        const fruitCopy = [...fruits]
        // manipuler mon state
        const fruitsCopyUpdated = fruitCopy.filter(fruit => fruit.id !== id)
        //modifier mon state
        setFruits(fruitsCopyUpdated);
    }
    //AFFICHAGE
    return (
        <div>
            <h1>Liste de fruits</h1>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id}>
                        {fruits.nom}
                        <button onClick={()=>removeLink(fruit.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default List;