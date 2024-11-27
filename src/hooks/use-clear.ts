import { useEffect } from "react";
import { useFipeContext, useFipeDispatchContext } from "./use-fipe";

export const useClear = () => {
    const state = useFipeContext()
    const dispatch = useFipeDispatchContext()

    const clearBrand = () => dispatch({ type: 'BRAND_SELECTED', value: undefined })
    const clearModel = () => dispatch({ type: 'MODEL_SELECTED', value: undefined })
    const clearYear = () => dispatch({ type: 'YEAR_SELECTED', value: undefined })

    useEffect(() => {
        clearBrand()
        clearModel()
        clearYear()
    }, [state.transportType])

    useEffect(() => {
        clearModel()
        clearYear()
    }, [state.brand])


    useEffect(() => {
        clearYear()
    }, [state.model])

    return {};
};

