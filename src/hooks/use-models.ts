import FipeService from "@/services/FipeService";
import Generic from "@/types/Generic";
import { useState, useCallback } from "react";

export const useModels = () => {
    const [models, setModels] = useState<Generic[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const svc = FipeService()

    const getModels = useCallback(
        async (mode: string, brand: string) => {
            try {
                setIsPending(true)
                const json = await svc.modelos(mode, brand)
                setModels(json['modelos'])
            } catch (error) {
                setError(`${error}`)
            } finally {
                setIsPending(false)
            }
        }, []
    )
    return { models, isPending, error, getModels };
};

