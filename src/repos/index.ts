import {api} from "./settings";
import {apiJSON} from "./settings/test.ts";

const repos = async (item: string) => {
    return api.post(`todos/${item}`)
}

const getItemRepos = async () => {
    return apiJSON.get(``).then(res => res.data)
}

export {
    repos,
    getItemRepos
}