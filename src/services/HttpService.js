import axios from "axios";

export default class HttpService {
    static #api = axios.create({
        baseURL: "http://localhost:8000/api",
        timeout: 4500,
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    static async request({url, method, params, data, headers}) {
        const token = localStorage.getItem("token");
        return await this.#api.request({
            url,
            method,
            params,
            data, 
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`
            }
        }); 
    }
}

