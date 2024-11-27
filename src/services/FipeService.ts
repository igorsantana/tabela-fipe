import Generic from "@/types/Generic";
import Price from "@/types/prices";

const FipeService = () => {
    const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';
    return {
        marcas: async (mode: string): Promise<Generic[]> => {
            const res = await fetch(`${BASE_URL}/${mode}/marcas`)
            return res.json()
        },
        modelos: async (mode: string, marca: string): Promise<{ modelos: Generic[], anos: Generic[] }> => {
            const res = await fetch(`${BASE_URL}/${mode}/marcas/${marca}/modelos`)
            return res.json()
        },
        anos: async (mode: string, marca: string, modelo: string): Promise<Generic[]> => {
            const res = await fetch(`${BASE_URL}/${mode}/marcas/${marca}/modelos/${modelo}/anos`)
            return res.json()
        },
        precos: async (mode: string, marca: string, modelo: string, ano: string): Promise<Price> => {
            const res = await fetch(`${BASE_URL}/${mode}/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
            return res.json()
        },
    }
}

export default FipeService;