import BrandSelector from "@/components/app/brand-selector";
import YearSelector from "@/components/app/year-selector";
import ModelSelector from "@/components/app/model-selector";
import TransportSelector from "@/components/app/transport-selector";
import { useFipeContext, useFipeDispatchContext } from "@/hooks/use-fipe";
import { useEffect } from "react";
import { usePrice } from "@/hooks/use-prices";

export default function Selector() {
  const state = useFipeContext();
  const dispatch = useFipeDispatchContext();
  const { price, getPrice } = usePrice();

  useEffect(() => {
    if (price) {
      dispatch({ type: "PRICE_FOUND", value: price });
    }
  }, [price]);

  useEffect(() => {
    searchPrices();
  }, [state.year]);

  const searchPrices = () => {
    if (state.brand && state.model && state.year) {
      getPrice(
        state.transportType,
        state.brand.codigo,
        state.model.codigo,
        state.year.codigo
      );
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-2">
        <TransportSelector />
        <BrandSelector />
        <ModelSelector />
        <YearSelector />
      </div>
    </>
  );
}
