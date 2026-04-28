import type {Author} from './author'

export interface Book {
    id: number;
    name: string;
    categoryId: number;
    authorFullNames: string [];
    availableCopies: number;
    stateId: number;

}