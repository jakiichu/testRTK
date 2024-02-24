import {pokemonApi} from "./query";
import {useEffect} from "react";

type  ILinkElement = Element & { rel: string, href: string } | null

class Icons {
    private link: ILinkElement;
    private readonly baseIcon;

    constructor(baseIcon: string) {
        this.link = document.querySelector("link[rel~='icon']");
        this.baseIcon = baseIcon
    }

    public setLink(url: string): void {
        console.log(url)
        if (!this.link) {
            this.link = document.createElement('link');
            this.link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(this.link);
        }
        this.link.href = url;
    }

    public setBaseLink(): void {
        void this.setLink(this.baseIcon)
    }

}

export {
    Icons
}

const App = () => {
    const {useGetPokemonByNameQuery, useSetDataByNameMutation, useGetDataByNameQuery,} = pokemonApi
    const {data, refetch} = useGetPokemonByNameQuery('bulbasaur')
    const {data: list} = useGetDataByNameQuery('1')
    const asd = new Icons('')
    const [mutation] = useSetDataByNameMutation()
    useEffect(() => {
        mutation('1')
        setTimeout(() => {
            asd.setLink('/react.svg')
        }, 20000)
        void refetch()
    }, [])

    return (
        <div>

        </div>
    )
}

export default App
