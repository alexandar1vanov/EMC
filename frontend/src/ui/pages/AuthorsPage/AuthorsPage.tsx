import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import useAuthors from "../../../hooks/useAuthors";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AuthorsPage = () => {
    const { authors, loading, error } = useAuthors();

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading authors</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}> Authors
            </Typography>
            {authors.map((author) => (
                <Paper key={author.id} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6">
                        {author.name} {author.surname}
                    </Typography>
                    {/*<Typography>Country: {author.countryName}</Typography>*/}
                    <Button component={Link} to={`/authors/${author.id}`}>
                        Details
                    </Button>
                </Paper>
            ))}
        </Box>
    );
};

export default AuthorsPage;