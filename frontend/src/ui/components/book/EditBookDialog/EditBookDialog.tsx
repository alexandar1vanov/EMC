import type {Book, BookFormData} from '../../../../api/types/book';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    type SelectChangeEvent,
    TextField
} from '@mui/material';
import {useState} from 'react';
import * as React from 'react';
import useAuthors from '../../../../hooks/useAuthors';

interface FormData {
    name: string;
    categoryId: string;
    availableCopies: string;
    stateId: string;
    authorFullNames: string[];
    authorIds: number[];
}


interface EditBookDialogProps {
    book: Book;
    open: boolean;
    onClose: () => void;
    onEdit: (id: number, data: BookFormData) => Promise<void>;
}

const EditProductDialog = ({book, open, onClose, onEdit}: EditBookDialogProps) => {
    const {authors} = useAuthors();

    const [formData, setFormData] = useState<FormData>({
        name: book.name,
        categoryId: book.categoryId.toString(),
        availableCopies: book.availableCopies.toString(),
        stateId: book.stateId.toString(),
        authorFullNames: book.authorFullNames,
        authorIds: book.authorIds
    });

    // const handleChange = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
    // ) => {
    //     const {name, value} = event.target;
    //     setFormData((prev) => ({...prev, [name]: value}));
    // };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const {name, value} = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAuthorsChange = (
        event: SelectChangeEvent<string[]>
    ) => {

        const value = event.target.value;

        setFormData((prev) => ({
            ...prev,
            authorFullNames:
                typeof value === 'string'
                    ? value.split(',')
                    : value
        }));
    };


    const handleSubmit = async () => {
        const payload: BookFormData = {
            name: formData.name.trim(),
            categoryId: Number(formData.categoryId),
            availableCopies: Number(formData.availableCopies),
            stateId: Number(formData.stateId),
            authorFullNames: formData.authorFullNames,
            authorIds: formData.authorIds
        };

        await onEdit(book.id, payload);
        setFormData({...formData});
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogContent>
                <TextField
                    margin='dense'
                    label='Name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    margin='dense'
                    label='Category ID'
                    name='categoryId'
                    value={formData.categoryId}
                    onChange={handleInputChange}
                    type='number'
                    fullWidth
                />
                <TextField
                    margin='dense'
                    label='Available Copies'
                    name='availableCopies'
                    value={formData.availableCopies}
                    onChange={handleInputChange}
                    type='number'
                    fullWidth
                />
                <TextField
                    margin='dense'
                    label='State ID'
                    name='stateId'
                    value={formData.stateId}
                    onChange={handleInputChange}
                    type='number'
                    fullWidth
                />
                <FormControl
                    margin='dense'
                    fullWidth
                >
                    <InputLabel>
                        Authors
                    </InputLabel>

                    <Select
                        multiple
                        label='Authors'
                        name='authorFullNames'
                        value={
                            formData.authorFullNames
                        }
                        onChange={
                            handleAuthorsChange
                        }
                    >
                        {authors.map((author) => (
                            <MenuItem
                                key={author.id}
                                value={author.name}
                            >
                                {author.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant='contained' color='primary'>Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditProductDialog;
