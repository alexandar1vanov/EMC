import { useCallback, useEffect, useState } from "react";
import bookRepository from "../api/repositories/bookApi";
import type { Book } from "../api/types/book";

const useBook = (id?: string) => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        if (!id) return;

        setLoading(true);
        try {
            const data = await bookRepository.findById(String(id));
            setBook(data);
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

    return { book, loading, error };
};

export default useBook;