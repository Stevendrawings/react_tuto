import { useState } from "react";

const Grothhackreact = () => {
// State
const [searchComplete, setSearchComplete] = useState()
// comportement
const handleSearchApp = () => {
    console.log("requete")
}
const handleValide = () => {
    console.log("envoie de formulaire")
}
// rendu
    return (
        <div>
            <h1>Growth Hack</h1>
                <form action="submit" onSubmit={handleSearchApp}>
                    <input value={searchComplete} type="text" placeholder="Lien de votre requete..."/>
                    <button onClick={handleValide}>Envoyer</button>
                </form>
        </div>
    )
}

export default Grothhackreact;