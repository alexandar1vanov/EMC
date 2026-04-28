import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useAuthor from "../../../hooks/useAuthor";

const AuthorDetailsPage = () => {
    const { id } = useParams();
    const { author, loading, error } = useAuthor(id);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading author</Typography>;
    if (!author) return <Typography>Author not found</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Button component={Link} to="/authors" sx={{ mb: 2 }}>
                Back to Authors
            </Button>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {author.name} {author.surname}
                </Typography>
                <Typography>Country: {author.countryName}</Typography>
            </Paper>
        </Box>
    );
};

export default AuthorDetailsPage;