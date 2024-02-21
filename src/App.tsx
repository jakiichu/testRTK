import {pokemonApi} from "./query";
import {useEffect} from "react";

const App = () => {
    const {useGetPokemonByNameQuery, useSetDataByNameMutation, useGetDataByNameQuery,} = pokemonApi
    const {data, refetch} = useGetPokemonByNameQuery('bulbasaur')
    const {data: list} = useGetDataByNameQuery('1')
    const [mutation] = useSetDataByNameMutation()
    useEffect(() => {
        mutation('1')
        void refetch()
    }, [])
    console.log(data, list)
    return (
        <div>

        </div>
    )
}

export default App
