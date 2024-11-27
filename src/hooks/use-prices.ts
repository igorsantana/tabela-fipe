import FipeService from "@/services/FipeService";
import Price from "@/types/prices";
import { useState, useCallback } from "react";

export const usePrice = () => {
    const [price, setPrice] = useState<Price>();
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const svc = FipeService()

    const getPrice = useCallback(
        async (mode: string, brand: string, model: string, year: string) => {
            try {
                setIsPending(true)
                const json = await svc.precos(mode, brand, model, year)
                console.log(json)
                setPrice(json)
            } catch (error) {
                setError(`${error}`)
            } finally {
                setIsPending(false)
            }
        }, []
    )
    return { price, isPending, error, getPrice };
};

