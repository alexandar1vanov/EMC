import { useCallback, useEffect, useState } from "react";
import authorRepository from "../api/repositories/authorApi";
import type { Author } from "../api/types/author";

const useAuthors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        setLoading(true);

        try {
            const data = await authorRepository.findAll();
            setAuthors(data);
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

    return { authors, loading, error, fetch };
};

export default useAuthors;