import { useState } from "react";

const GrothHackreact = () => {
// State
const [search, setSearch] = useState()
// function
const handleSearchApp = () => {
    
};
// rendu
    return (
        <div>
            <h1>Growth Hack</h1>
            <input value="search"/>
            <button onClick={handleSearchApp}>Submit</button>
            <div>Rendu element</div>
        </div>
    )
}

export default GrothHackreact;