import axios from 'axios';

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_hP6H204vpUdETEOaUdWpI7E2L2kyydQsb5iYRdJtdkjILdxbt3ZNy6JmQuLU9CwE";

export function fetchBreeds() {
    return fetch(
        `${BASE_URL}/breeds`
    ).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
}

export function fetchCatByBreed(breedId) {
    return fetch(
        `${BASE_URL}/images/search?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`
    ).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return (resp.json())
    })
}