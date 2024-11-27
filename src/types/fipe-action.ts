import Generic from "./Generic";
import Price from "./prices";
import { TransportType } from "./transport-type";

type FipeAction = { type: string; value: Generic | Price | TransportType | Price[] | undefined }


export type { FipeAction }