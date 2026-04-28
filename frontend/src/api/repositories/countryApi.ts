import type { Country } from "../types/country";
import axiosInstance from "../../axios/axios";

const countryRepository = {
    findAll: async () => {
        const response = await axiosInstance.get<Country[]>("/countries");
        return response.data;
    },

    findById: async (id: number) => {
        const response = await axiosInstance.get<Country>(`/countries/${id}`);
        return response.data;
    },
};

export default countryRepository;