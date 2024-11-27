import Selector from "@/components/app";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useClear } from "@/hooks/use-clear";
import { useFipeContext } from "@/hooks/use-fipe";

export default function Home() {
  const state = useFipeContext();
  useClear();

  const showPrice = () => {
    if (!state.price) return;
    return (
      <div className="grid grid-rows-3 grid-cols-2 justify-items-start	 gap-x-4">
        <strong>Código FIPE:</strong> <span>{state.price.CodigoFipe}</span>
        <strong>Mês de Referência:</strong>
        <span>{state.price.MesReferencia}</span>
        <strong>Valor:</strong> <span>{state.price.Valor}</span>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center">
      <Card className="w-6/12 ">
        <CardHeader>
          <CardTitle>Tabela FIPE</CardTitle>
          <CardDescription>Buscar valores da Tabela FIPE</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Selector />
          {showPrice()}
        </CardContent>
      </Card>
    </div>
  );
}
