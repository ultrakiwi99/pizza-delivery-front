import axios from "axios";

export default class Api {
    constructor(url, store) {
        this.url = url;
        this.store = store;
    }

    getCategoriesAndProducts() {
        return axios
            .get(`${this.url}/api/products`)
            .then(result => result.data)
            .catch(error => error);
    }
}