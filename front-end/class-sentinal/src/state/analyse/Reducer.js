import { ANALYSE_FAILURE, ANALYSE_REQUEST, ANALYSE_SUCCESS } from "../auth/ActionType";

export const initialState = {
    report : null,
    isLoading: false,
    error: null,
    jwt: localStorage.getItem("jwt") || null,
    success: null
}

export const analyseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANALYSE_REQUEST:
      return { ...state, loading: true };
    case ANALYSE_SUCCESS:
      return {
        ...state,
        loading: false,
        report: action.payload, 
      };
    case ANALYSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
