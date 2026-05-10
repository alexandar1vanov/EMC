import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button
} from "@mui/material";
import { Link } from "react-router-dom";
import type {Book, BookFormData} from "../../../api/types/book";

type Props = {
    books: Book[];
    onEdit: (id: number, data: BookFormData) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
};

const BooksTable = ({ books }: Props) => {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Authors</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Copies</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.name}</TableCell>
                            <TableCell>{book.authorFullNames.join(", ")}</TableCell>
                            <TableCell>{book.categoryId}</TableCell>
                            <TableCell>{book.availableCopies}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/books/${book.id}`}>
                                    Details
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default BooksTable;