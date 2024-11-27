import { FipeAction, INITIAL_STATE } from "@/reducers";
import { createContext, Dispatch } from "react";

const FipeContext = createContext(INITIAL_STATE);

const FipeDispatchContext = createContext<Dispatch<FipeAction>>(() => { });

export {
    FipeContext,
    FipeDispatchContext,
}