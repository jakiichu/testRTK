import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {repos} from "../repos";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',

    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),

    endpoints: (builder) => ({
        getPokemonByName: builder.query<unknown, string>({
            query: (name) => `pokemon/${name}`,
        }),
        getDataByName: builder.query<unknown, string>({
            query: (index) => `https://jsonplaceholder.typicode.com/todos/${index}`,
        }),
        setDataByName: builder.mutation({
            queryFn: (item) => repos(item)
        }),

    }),

})
