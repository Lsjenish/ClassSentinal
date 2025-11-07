import axios from "axios";
import { ANALYSE_FAILURE, ANALYSE_REQUEST, ANALYSE_SUCCESS } from "../auth/ActionType";
import { API_URL } from "../../services/api";

export const analyseSpam = (analyseData) => async (dispatch) => {
  try {
    dispatch({ type: ANALYSE_REQUEST });
    const token = localStorage.getItem("jwt");
    const { data } = await axios.post(`${API_URL}/app/check`, analyseData, {headers : {
            Authorization : `Bearer ${token}`
        }});

        if(data != null){
          analyseData.navigate("/report");
        }
    dispatch({
      type: ANALYSE_SUCCESS,
      payload: data,
    });
    console.log("The Analysed Data : " , data)
  } catch (error) {
    dispatch({
      type: ANALYSE_FAILURE,
      payload : error
    });
    console.log("error" , error);
  }
};
