import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import './Header.css';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const pages = [
    { path: "/", name: "Home" },
    { path: "/books", name: "Books" },
    { path: "/authors", name: "Authors" },
    { path: "/countries", name: "Countries" },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: "none" } }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        EMT Library
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 240 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {pages.map((page) => (
                            <ListItem key={page.name} disablePadding>
                                <ListItemButton component={Link} to={page.path}>
                                    <ListItemText primary={page.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;