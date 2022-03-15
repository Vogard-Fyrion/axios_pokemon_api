import axios from 'axios'
import React, {useState} from 'react'

const API = () => {
    const [allPokemon, setAllPokemon] = useState([])

    const fetchAllPokemon = async() => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=905`)
        setAllPokemon(response.data.results)
    }

    return (
            <div>
                <button onClick={fetchAllPokemon}>Show All Pokemon</button>
                {
                    allPokemon.map((p, i) => {
                        return(
                            <div key={i}>
                                <p>{p.name}</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default API