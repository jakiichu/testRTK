import {api} from "./settings";

const repos = async (item: string) => {
    return api.post(`todos/${item}`)
}

export {
    repos
}