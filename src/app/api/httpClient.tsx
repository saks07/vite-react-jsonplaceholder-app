export class HttpClient {
    constructor() { }

    async get<T>(url: string, config?: any): Promise<T> {
        const response = await fetch(url, config);
        const data = await response.json();
        return data;
    }
}