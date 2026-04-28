import { useCallback, useEffect, useState } from "react";
import countryRepository from "../api/repositories/countryApi";
import type { Country } from "../api/types/country";

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        setLoading(true);

        try {
            const data = await countryRepository.findAll();
            setCountries(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred."));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetch();
    }, [fetch]);

    return { countries, loading, error, fetch };
};

export default useCountries;