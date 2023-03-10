import usePage from "@services/Providers/PageProvider"
import { BiHomeCircle, BiSearch, BiAddToQueue, BiHeart, BiUserCircle } from "react-icons/bi";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const MobileNavigation = () => {
    const { page, setPage } = usePage();
    const [value, setValue] = useState(page);

    const handleChange = (event, newValue) => {
        setPage(newValue);
        setValue(newValue);
    };

    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction component={RouterLink} to="/" label="Home" value="home" icon={<BiHomeCircle />} />
                    <BottomNavigationAction component={RouterLink} label="Search" value="search" icon={<BiSearch />} />
                    <BottomNavigationAction component={RouterLink} to="/consult/selectCoder" label="Create" value="create" icon={<BiAddToQueue />} />
                    <BottomNavigationAction component={RouterLink} label="Favorites" value="favorites" icon={<BiHeart />} />
                    <BottomNavigationAction component={RouterLink} label="Profile" value="profile" icon={<BiUserCircle />} />
                </BottomNavigation>
            </Paper>
        </>
    )
}

export default MobileNavigation;

