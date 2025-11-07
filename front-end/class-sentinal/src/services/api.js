import axious from "axios"

export const API_URL = "http://localhost:8081"

export var isAuthenticated = false;

export const api  = axious.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json",
    }
})
