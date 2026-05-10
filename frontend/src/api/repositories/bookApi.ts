import type {Book, BookFormData} from "../types/book";
import axiosInstance from "../../axios/axios";

const bookRepository = {

    findAll: async () => {
        const response = await axiosInstance.get("/books/paginated");
        console.log("BOOKS RESPONSE:", response.data.content);
        return response.data.content ?? response.data;
        console.log("RESPONSE FULL:", response);
    },

    findById: async (id: string) => {
        const response = await axiosInstance.get<Book>(`/books/${id}`);
        return response.data;
    },

    // findBookDetailedById: async(id:string)=>{
    //     return await axiosInstance.get<Book>(`/books/${id}/detailed`);
    // },

    add: async (data: BookFormData) => {
        return await axiosInstance.post<Book>('/books/add', data);
    },
    edit: async (id: number, data: BookFormData) => {
        return await axiosInstance.put<Book>(`/books/edit/${id}`, data);
    },
    delete: async (id: number) => {
        return await axiosInstance.delete<Book>(`/books/delete/${id}`);
    }


};

export default bookRepository;