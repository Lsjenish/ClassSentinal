import axious from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_URL, isAuthenticated } from "../../services/api"


export const registerUser = (reqData) => async (dispatch) => {
    dispatch({type : REGISTER_REQUEST})
    try{
        const {data}  = await axious.post(`${API_URL}/auth/register` , reqData.userData)
        if(data.jwt) localStorage.setItem("jwt" , data.jwt)
        if(data.role == "STUDENT"){
            reqData.navigate("/app/check")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type : REGISTER_SUCCESS , payload : data.jwt})
        console.log("register success" , data)
        isAuthenticated = true;

    }
    catch(e){
        dispatch({type : REGISTER_FAILURE , payload : e})
        console.log("error" ,e)
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({type : LOGIN_REQUEST})
    try{
        const {data}  = await axious.post(`${API_URL}/auth/login` , reqData.userData)
        if(data.jwt) localStorage.setItem("jwt" , data.jwt)
        if(data.role == "STUDENT"){
            reqData.navigate("/app/check")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type : LOGIN_SUCCESS , payload : data.jwt})
        console.log("login success" , data)
        isAuthenticated = true;

    }
    catch(e){
        dispatch({type : LOGIN_FAILURE , payload : e})

        console.log("error" ,e)
    }
}


export const logOutUser = () => async (dispatch) => {
    try{
        dispatch({type : LOGOUT})
        localStorage.clear()
        isAuthenticated = false;
        console.log("logout success" , data)
    }
    catch(e){
        console.log("error" ,e)
    }
}
