import {Box, Button, CircularProgress, Paper, Typography} from "@mui/material";
import useBooks from "../../../hooks/useBooks";
import { Link } from "react-router-dom";


const BooksPage = () => {
    const { books, loading, error } = useBooks();

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading books</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}> Books
            </Typography>
            {books.map((book) => (
                <Paper key={book.id} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6">{book.name}</Typography>
                    <Typography>Author: {book.authorIds}</Typography>
                    <Typography>Category: {book.categoryId}</Typography>
                    <Typography>Available copies: {book.availableCopies}</Typography>
                    <Button component={Link} to={`/books/${book.id}`}>
                        Details
                    </Button>
                </Paper>

            ))}
        </Box>
    );
};

export default BooksPage;