import { useCallback, useEffect, useState } from "react";
import authorRepository from "../api/repositories/authorApi";
import type { Author } from "../api/types/author";

const useAuthor = (id?: string) => {
    const [author, setAuthor] = useState<Author | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        try {
            const data = await authorRepository.findById(Number(id));
            setAuthor(data);
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

    return { author, loading, error };
};

export default useAuthor;