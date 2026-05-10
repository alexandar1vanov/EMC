import type { Author } from "../types/author";
import axiosInstance from "../../axios/axios";

const authorRepository = {
    findAll: async () => {
        console.log("povik authors")
        const response = await axiosInstance.get<Author[]>("/authors");
        return response.data;
    },

    findById: async (id: number) => {
        const response = await axiosInstance.get<Author>(`/authors/${id}`);
        return response.data;
    },
};

export default authorRepository;