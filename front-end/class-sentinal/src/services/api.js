import axious from "axios"

export const API_URL = "http://localhost:8081"


export const api  = axious.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json",
    }
})
