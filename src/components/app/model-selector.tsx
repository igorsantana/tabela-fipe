import { useEffect, useState } from "react";
import { useFipeContext, useFipeDispatchContext } from "@/hooks/use-fipe";
import Generic from "@/types/Generic";
import { AutoComplete, Option } from "../ui/autocomplete";
import { useModels } from "@/hooks/use-models";

export default function ModelSelector() {
  const [selected, setSelected] = useState<Option>();
  const { models, getModels } = useModels();
  const state = useFipeContext();
  const dispatch = useFipeDispatchContext();

  useEffect(() => {
    if (state.brand) {
      getModels(state.transportType, state.brand.codigo);
    }
    setSelected(undefined);
  }, [state.brand]);

  useEffect(() => {
    if (selected) {
      const [model] = models.filter(
        (model: Generic) => model.codigo === selected.value
      );
      dispatch({ value: model, type: "MODEL_SELECTED" });
    }
  }, [selected]);

  const options = () =>
    models.map(({ codigo, nome }) => ({ label: nome, value: codigo }));

  return (
    <div className=" w-full">
      <h1 className="text-sm font-bold m-0 text-left mb-1 pl-1">Modelos</h1>
      <AutoComplete
        options={state.brand ? options() : []}
        emptyMessage="Não existem resultados"
        placeholder="Escolha um dos modelos"
        onValueChange={setSelected}
        value={selected}
        disabled={!state.brand}
      />
    </div>
  );
}
