import { TransportType } from "@/types/transport-type";
import { FipeState, FipeAction } from ".";
import Generic from "@/types/Generic";
import Price from "@/types/prices";

function FipeReducer(state: FipeState, action: FipeAction): FipeState {
    if (action.type === 'TRANSPORT_TYPE_CHANGED') {
        return { ...state, transportType: action.value as TransportType }
    }
    if (action.type === 'BRAND_SELECTED') {
        return { ...state, brand: action.value as Generic }
    }
    if (action.type === 'MODEL_SELECTED') {
        return { ...state, model: action.value as Generic }
    }
    if (action.type === 'YEAR_SELECTED') {
        return { ...state, year: action.value as Generic }
    }
    if (action.type === 'PRICE_FOUND') {
        return { ...state, price: action.value as Price }
    }
    return state;
}

export default FipeReducer