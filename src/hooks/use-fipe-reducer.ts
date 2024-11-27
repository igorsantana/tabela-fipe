import FipeReducer from "@/reducers";
import { INITIAL_STATE } from "@/reducers";
import { useReducer } from "react";

function useFipeReducer() {
    return useReducer(FipeReducer, INITIAL_STATE);
}
export default useFipeReducer