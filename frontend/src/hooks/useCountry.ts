import { useCallback, useEffect, useState } from "react";
import countryRepository from "../api/repositories/countryApi";
import type { Country } from "../api/types/country";

const useCountry = (id?: string) => {
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        try {
            const data = await countryRepository.findById(Number(id));
            setCountry(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("Unknown error"));
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void fetch();
    }, [fetch]);

    return { country, loading, error };
};

export default useCountry;