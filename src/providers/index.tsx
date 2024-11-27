import { FipeContext, FipeDispatchContext } from "@/reducers/context";
import useFipeReducer from "@/hooks/use-fipe-reducer";
import { ReactNode } from "react";

export default function FipeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useFipeReducer();
  return (
    <FipeContext.Provider value={state}>
      <FipeDispatchContext.Provider value={dispatch}>
        {children}
      </FipeDispatchContext.Provider>
    </FipeContext.Provider>
  );
}
