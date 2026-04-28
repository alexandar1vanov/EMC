import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import useCountries from "../../../hooks/useCountries";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CountriesPage = () => {
    const { countries, loading, error } = useCountries();

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Error loading countries</Typography>;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}> Countries
            </Typography>


           {countries.map((country) => (
                <Paper key={country.id} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6">{country.name}</Typography>
                    {/*<Typography>Continent: {country.continent}</Typography>*/}
                    <Button component={Link} to={`/countries/${country.id}`}>
                        Details
                    </Button>
                </Paper>
            ))}
        </Box>
    );
};

export default CountriesPage;