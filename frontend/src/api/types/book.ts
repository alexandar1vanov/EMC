import type {Author} from './author'

export interface Book {
    id: number;
    name: string;
    categoryId: number;
    authorFullNames: string [];
    authorIds: number [];
    availableCopies: number;
    stateId: number;
}

export interface BookDetails{
    id:number;
    name: string;
    categoryId: number;
    authorFullNames: string [];
    availableCopies: number;
    stateId: number;
}

export interface BookFormData{
    name: string;
    categoryId: number;
    authorFullNames: string [];
    authorIds: number [];
    availableCopies: number;
    stateId: number;
}

