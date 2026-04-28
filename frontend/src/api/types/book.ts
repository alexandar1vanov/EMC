import type {Author} from './author'

export interface Book {
    id: number; //TODO: dodaj na backend
    name: string;
    categoryId: number;
    authorIds: number [];
    availableCopies: number;
    stateId: number;

}