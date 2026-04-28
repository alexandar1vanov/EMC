import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useBook from "../../../hooks/useBook";

const BookDetailsPage = () => {
    const { id } = useParams();
    const { book, loading, error } = useBook(id);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading book</Typography>;
    if (!book) return <Typography>Book not found</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Button component={Link} to="/books" sx={{ mb: 2 }}>
                Back to Books
            </Button>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {book.name}
                </Typography>
                <Typography>Author: {book.authorIds}</Typography>
                <Typography>Category: {book.categoryId}</Typography>
                <Typography>Available copies: {book.availableCopies}</Typography>
                <Typography>State: {book.stateId}</Typography>

            </Paper>
        </Box>
    );
};

export default BookDetailsPage;