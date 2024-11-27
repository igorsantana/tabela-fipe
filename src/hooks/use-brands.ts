import FipeService from "@/services/FipeService";
import Generic from "@/types/Generic";
import { useState, useCallback } from "react";

export const useBrands = () => {
    const [brands, setBrands] = useState<Generic[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const svc = FipeService()

    const getBrands = useCallback(
        async (mode: string) => {
            try {
                setIsPending(true)
                const json = await svc.marcas(mode)
                setBrands(json)
            } catch (error) {
                setError(`${error}`)
            } finally {
                setIsPending(false)
            }
        }, []
    )
    return { brands, isPending, error, getBrands };
};

