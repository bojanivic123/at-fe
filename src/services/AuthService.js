import HttpService from "./HttpService";

export default class AuthService {
    static async register(data) {
        return await HttpService.request({
            url: "/register",
            method: "POST",
            data 
        });
    }
    static async login(data) {
        return await HttpService.request({
            url: "/login",
            method: "POST",
            data 
        });
    }
    static async logout() {
        return await HttpService.request({
            url: "/logout",
            method: "POST"
        });
    }
}

