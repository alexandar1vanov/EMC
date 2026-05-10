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
//ne sam sig dali rreba authors
import useAuthors from '../../../../hooks/useAuthors';
import {useState} from 'react';
import type {BookFormData} from '../../../../api/types/book';
import * as React from 'react';

interface FormData {
    name: string;
    categoryId: string;
    availableCopies: string;
    stateId: string;
    authorFullNames: string[];
    authorIds: number[];
}

const initialFormData: FormData = {
    name: '',
    categoryId: '',
    availableCopies: '',
    stateId: '',
    authorFullNames: [],
    authorIds: []
};

interface AddProductDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (data: BookFormData) => Promise<void>;
}

const AddProductDialog = ({open, onClose, onAdd}: AddProductDialogProps) => {

    // const { categories } = useCategories();
    const {authors} = useAuthors();

    const [formData, setFormData] = useState<FormData>(initialFormData);

    // const handleChange = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
    // ) => {
    //     const {name, value} = event.target;
    //     setFormData((prev) => ({...prev,
    //         // [name]: value}));
    //         [name]:
    //             name === 'authorFullNames'
    //                 ? typeof value === 'string'
    //                     ? value.split(',')
    //                     : value
    //                 : value
    //     }));
    // };

    //novo nz
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const { name, value } = event.target;

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


        await onAdd(payload);
        setFormData({...initialFormData});
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
            <DialogTitle>Add Book</DialogTitle>
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
                    // multiline={true}
                    // rows={3}
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
                    label='State Id'
                    name='stateId'
                    value={formData.stateId}
                    onChange={handleInputChange}
                    type='number'
                    fullWidth
                />
                <FormControl margin='dense' fullWidth>
                    <InputLabel>Authors</InputLabel>
                    <Select
                        multiple
                        label='Authors'
                        name='authorFullNames'
                        value={formData.authorFullNames}
                        onChange={handleAuthorsChange}
                        >
                        {authors.map((author) => (
                            <MenuItem key={author.id} value={author.name}>{author.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant='contained' color='primary'>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddProductDialog;
