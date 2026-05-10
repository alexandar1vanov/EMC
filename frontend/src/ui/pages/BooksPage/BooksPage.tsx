import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Snackbar,
    Typography,
    IconButton
} from '@mui/material';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import {useState} from 'react';
import useBooks from '../../../hooks/useBooks';
import BooksGrid from './BooksGrid';
import BooksTable from './BooksTable';
import AddBookDialog from '../../components/book/AddBookDIalog/AddBookDialog';
import type {BookFormData} from '../../../api/types/book';
import useAuth from '../../../hooks/useAuth';

const BooksPage = () => {

    const {user} = useAuth();
    const isAdmin =
        user?.roles.includes("ROLE_ADMINISTRATOR") ?? false;
    console.log('isAdmin: ', isAdmin);
    console.log('user: ', user);

    const {
        books,
        loading,
        error,
        onAdd,
        onEdit,
        onDelete
    } = useBooks();

    const [addBookDialogOpen, setAddBookDialogOpen] =
        useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: ''
    });

    const [view, setView] =
        useState<'cards' | 'table'>('cards');

    const handleAdd = async (data: BookFormData) => {
        try {
            await onAdd(data);
        } catch (err) {
            setSnackbar({
                open: true,
                message:
                    err instanceof Error
                        ? err.message
                        : 'Failed to add book.'
            });
        }
    };

    return (
        <Box sx={{p: 3}}>

            {loading && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 5
                    }}
                >
                    <CircularProgress/>
                </Box>
            )}

            {!loading && (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:
                                'space-between',
                            mb: 3
                        }}
                    >
                        <Typography variant="h4">
                            Books
                        </Typography>

                        <Box sx={{display: 'flex', gap: 1}}>

                            <IconButton
                                onClick={() =>
                                    setView(
                                        view === 'cards'
                                            ? 'table'
                                            : 'cards'
                                    )
                                }
                            >
                                {view === 'table' ? (
                                    <ViewListIcon/>
                                ) : (
                                    <ViewModuleIcon/>
                                )}
                            </IconButton>

                            {isAdmin && (
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        setAddBookDialogOpen(true)
                                    }
                                >
                                    Add Book
                                </Button>
                            )}

                        </Box>
                    </Box>

                    {view === 'cards' ? (
                        <BooksGrid
                            books={books}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ) : (
                        <BooksTable
                            books={books}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    )}

                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={3000}
                        onClose={() =>
                            setSnackbar(prev => ({
                                ...prev,
                                open: false
                            }))
                        }
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                    >
                        <Alert
                            severity="error"
                            onClose={() =>
                                setSnackbar(prev => ({
                                    ...prev,
                                    open: false
                                }))
                            }
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>

                    <AddBookDialog
                        open={addBookDialogOpen}
                        onClose={() =>
                            setAddBookDialogOpen(false)
                        }
                        onAdd={handleAdd}
                    />
                </>
            )}

        </Box>
    );
};

export default BooksPage;