import FipeService from "@/services/FipeService";
import Generic from "@/types/Generic";
import { useState, useCallback } from "react";

export const useYears = () => {
    const [years, setYears] = useState<Generic[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const svc = FipeService()

    const getYears = useCallback(
        async (mode: string, brand: string, model: string) => {
            try {
                setIsPending(true)
                const json = await svc.anos(mode, brand, model)
                setYears(json)
            } catch (error) {
                setError(`${error}`)
            } finally {
                setIsPending(false)
            }
        }, []
    )
    return { years, isPending, error, getYears };
};

