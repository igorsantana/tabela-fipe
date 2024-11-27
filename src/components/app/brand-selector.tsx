import { useBrands } from "@/hooks/use-brands";
import { useEffect, useState } from "react";
import { useFipeContext, useFipeDispatchContext } from "@/hooks/use-fipe";
import Generic from "@/types/Generic";
import { AutoComplete, Option } from "../ui/autocomplete";
// codigo: string;
// nome: string;

export default function BrandSelector() {
  const [selected, setSelected] = useState<Option>();
  const { brands, getBrands } = useBrands();
  const state = useFipeContext();
  const dispatch = useFipeDispatchContext();

  useEffect(() => {
    getBrands(state.transportType);
    setSelected(undefined)
  }, [state.transportType]);

  useEffect(() => {
    if (selected) {
      const [brand] = brands.filter(
        (brand: Generic) => brand.codigo === selected.value
      );
      dispatch({ value: brand, type: "BRAND_SELECTED" });
    }
  }, [selected]);

  const options = () =>
    brands.map(({ codigo, nome }) => ({ label: nome, value: codigo }));

  return (
    <div className="w-full">
      <h3 className="text-sm font-bold m-0 text-left mb-1 pl-1">Marcas</h3>
      <AutoComplete
        options={options()}
        emptyMessage="Não existem resultados."
        placeholder="Escolha uma marca"
        onValueChange={setSelected}
        value={selected}
      />
    </div>
  );
}
