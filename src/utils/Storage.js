export default class Storage {
    static set(key, value) {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }
    static get(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }
    static setString(key, value) {
        localStorage.setItem(key, value);
    }
    static getString(key) {
        return localStorage.getItem(key);
    }
    static clear(key) {
        localStorage.removeItem(key);
    }
}

