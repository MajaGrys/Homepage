export class Provider {
    public async getData(
        url:string,
        options?: RequestInit
        )
        {
            return fetch(url, options)
        }
}

export default new Provider()