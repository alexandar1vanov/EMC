import {useCallback, useEffect, useState} from "react";
import bookRepository from "../api/repositories/bookApi";
import type {Book, BookFormData} from "../api/types/book";
import bookApi from "../api/repositories/bookApi";


const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetch = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await bookRepository.findAll();
            // console.log("BOOKS RAW:", data)
            setBooks(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred."));
        } finally {
            setLoading(false);
        }
    }, []);

    const onAdd = useCallback(async (data: BookFormData) => {
        await bookApi.add(data);
        await fetch();
    }, [fetch]);

    const onEdit = useCallback(async (id: number, data: BookFormData) => {
        await bookApi.edit(id, data);
        await fetch();
    }, [fetch]);

    const onDelete = useCallback(async (id: number) => {
        await bookApi.delete(id);
        await fetch();
    }, [fetch]);

    useEffect(() => {
        void fetch();
    }, [fetch]);

    return {books, loading, error, fetch, onAdd, onEdit, onDelete};
};

export default useBooks;