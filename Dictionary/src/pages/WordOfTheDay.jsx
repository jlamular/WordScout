import { useEffect, useState } from "react";


function WordOfTheDay() {
    //https://wordoftheday.freeapi.me/
    const [typeword, settypeword] = useState("");
    const [definition, setDefinition] = useState("");
    useEffect(() => {
        fetch("https://wordoftheday.freeapi.me/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("ERROR FETCHING")
                }
                return response.json();
            }).then(data =>  {settypeword(data.word);
                setDefinition(data.definition)});
            
    },[])

    return (
        <div> 
            <h1>{typeword}</h1>
            <h3>{definition}</h3>
        </div>
    )

}

export default WordOfTheDay;