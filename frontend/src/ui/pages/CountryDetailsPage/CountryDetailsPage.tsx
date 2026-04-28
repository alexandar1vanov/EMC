import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useCountry from "../../../hooks/useCountry";

const CountryDetailsPage = () => {
    const { id } = useParams();
    const { country, loading, error } = useCountry(id);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading country</Typography>;
    if (!country) return <Typography>Country not found</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Button component={Link} to="/countries" sx={{ mb: 2 }}>
                Back to Countries
            </Button>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {country.name}
                </Typography>
                <Typography>Continent: {country.continent}</Typography>
            </Paper>
        </Box>
    );
};

export default CountryDetailsPage;