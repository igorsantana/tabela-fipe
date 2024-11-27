import Generic from "@/types/Generic";
import Price from "@/types/prices";
import { TransportType } from "@/types/transport-type";

interface FipeState {
    transportType: TransportType;
    brand?: Generic;
    model?: Generic;
    year?: Generic;
    price?: Price;
}

const INITIAL_STATE: FipeState = {
    transportType: 'carros',
}

export type { FipeState }

export default INITIAL_STATE