import { useEffect, useState } from "react";
import { useFipeContext, useFipeDispatchContext } from "@/hooks/use-fipe";
import Generic from "@/types/Generic";
import { AutoComplete, Option } from "../ui/autocomplete";
import { useYears } from "@/hooks/use-years";

export default function YearSelector() {
  const [selected, setSelected] = useState<Option>();
  const { years, getYears } = useYears();
  const state = useFipeContext();
  const dispatch = useFipeDispatchContext();

  useEffect(() => {
    if (state.brand && state.model) {
      getYears(state.transportType, state.brand.codigo, state.model.codigo);
    }
    setSelected(undefined);
  }, [state.model]);

  useEffect(() => {
    if (selected) {
      const [value] = years.filter(
        (year: Generic) => year.codigo === selected.value
      );
      dispatch({ value, type: "YEAR_SELECTED" });
    }
  }, [selected]);

  const options = () =>
    years.map(({ codigo, nome }) => ({ label: nome, value: codigo }));

  return (
    <div className="w-full">
      <h1 className="text-sm font-bold m-0 text-left mb-1 pl-1">Anos</h1>
      <AutoComplete
        options={state.brand && state.model ? options() : []}
        emptyMessage="Não existem resultados"
        placeholder="Escolha um dos anos"
        onValueChange={setSelected}
        value={selected}
        disabled={!state.brand || !state.model}
      />
    </div>
  );
}
