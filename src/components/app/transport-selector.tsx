import { Car, Bike, Truck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useFipeContext, useFipeDispatchContext } from "@/hooks/use-fipe";
import { TransportType } from "@/types/transport-type";

interface TabValue {
  value: TransportType;
  label: string;
  Icon: React.ReactNode;
}

export default function TransportSelector() {
  const state = useFipeContext();
  const dispatch = useFipeDispatchContext();
  const tabs: TabValue[] = [
    { value: "carros", label: "Carro", Icon: <Car size={16} /> },
    { value: "motos", label: "Moto", Icon: <Bike size={16} /> },
    { value: "caminhoes", label: "Caminhão", Icon: <Truck size={16} /> },
  ];

  const update = (value: TransportType) => {
    dispatch({ type: "BRAND_SELECTED", value: undefined });
    dispatch({ type: "TRANSPORT_TYPE_CHANGED", value });
  };

  return (
    <Tabs className="w-[400px]" value={state.transportType}>
      <TabsList>
        {tabs.map(({ value, label, Icon }) => {
          return (
            <TabsTrigger
              value={value}
              className="w-32"
              onClick={() => update(value)}
              key={value}
            >
              <span className="w-full flex items-center justify-evenly">
                {Icon}
                <span>{label}</span>
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
