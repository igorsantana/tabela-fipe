import { FipeContext, FipeDispatchContext } from "@/reducers/context";
import { useContext } from "react";

function useFipeContext() {
    return useContext(FipeContext);
}

function useFipeDispatchContext() {
    return useContext(FipeDispatchContext);
}

export {
    useFipeContext,
    useFipeDispatchContext
}