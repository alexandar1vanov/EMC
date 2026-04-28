import type { Book } from "../types/book";
import axiosInstance from "../../axios/axios";
import BookDetailsPage from "../../ui/pages/BookDetailsPage/BookDetailsPage";

const bookRepository = {
    // findAll: async () => {
    //     const response = await axiosInstance.get<Book[]>("/books");
    //     return response.data;
    // },
    findAll: async () => {
        const response = await axiosInstance.get("/books");
        console.log("BOOKS RESPONSE:", response.data.content);
        return response.data.content ?? response.data;
        console.log("RESPONSE FULL:", response);
    },

    findById: async (id: string) => {
        const response = await axiosInstance.get<Book>(`/books/${id}`);
        return response.data;
    },

    findBookDetailedById: async(id:string)=>{
        return await axiosInstance.get<Book>(`/books/${id}/detailed`);
    }
};

export default bookRepository;