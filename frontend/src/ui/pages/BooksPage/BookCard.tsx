import {Card, CardContent, CardActions, Typography, Button, Box, Snackbar, Alert} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import type {Book, BookFormData} from "../../../api/types/book";
import useAuth from "../../../hooks/useAuth";
import {useState} from "react";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteBookDialog from "../../components/book/DeleteBookDialog/DeleteBookDialog";
import EditBookDialog from "../../components/book/EditBookDialog/EditBookDialog";

type Props = {
    book: Book;
    onEdit: (id: number, data: BookFormData) => Promise<void>;
    onDelete: (id: number) => Promise<void>;

};

const BookCard = ({book, onEdit, onDelete}: Props) => {

    const {user} = useAuth();
    const isAdmin =
        user?.roles.includes("ROLE_ADMINISTRATOR") ?? false;

    const navigate = useNavigate();

    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
        open: false,
        message: ''
    });


    const [editBookDialogOpen, setEditBookDialogOpen] = useState<boolean>(false);
    const [deleteBookDialogOpen, setDeleteBookDialogOpen] = useState<boolean>(false);

    const handleEdit = async (id: number, data: BookFormData) => {
        try {
            await onEdit(id, data);
        } catch (err) {
            setSnackbar({
                open: true,
                message: err instanceof Error ? err.message : 'Failed to edit product.'
            });
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await onDelete(id);
        } catch (err) {
            setSnackbar({
                open: true,
                message: err instanceof Error ? err.message : 'Failed to delete product.'
            });
        }
    };


    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <CardContent>
                    <Typography variant="h6">{book.name}</Typography>
                    <Typography>
                        Authors: {book.authorFullNames.join(", ")}
                    </Typography>
                    <Typography>Category: {book.categoryId}</Typography>
                    <Typography>
                        Available copies: {book.availableCopies}
                    </Typography>
                </CardContent>

                <CardActions sx={{mt: "auto"}}>
                    <Button
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/books/${book.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        {isAdmin && (
                            <Button
                                startIcon={<EditIcon/>}
                                color='warning'
                                onClick={() => setEditBookDialogOpen(true)}
                            >
                                Edit
                            </Button>
                        )}
                        {isAdmin && (
                            <Button
                                startIcon={<DeleteIcon/>}
                                color='error'
                                onClick={() => setDeleteBookDialogOpen(true)}
                            >
                                Delete
                            </Button>
                        )}
                    </Box>
                </CardActions>
            </Card>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    severity='error'
                    onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

            <EditBookDialog
                book={book}
                open={editBookDialogOpen}
                onClose={() => setEditBookDialogOpen(false)}
                onEdit={handleEdit}
            />
            <DeleteBookDialog
                book={book}
                open={deleteBookDialogOpen}
                onClose={() => setDeleteBookDialogOpen(false)}
                onDelete={handleDelete}
            />
        </>
    );
};

export default BookCard;