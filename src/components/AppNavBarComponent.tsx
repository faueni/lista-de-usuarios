import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const AppNavBarComponent = (props: any) => {
    return (
    <Box sx={{ flexGrow: 1, marginBottom: 5}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    component={Link} to="/"
                >
                    <ArrowBackIcon/>
                </IconButton>
                <Button 
                    color="inherit" 
                    component={Link} 
                    to={(props.current_page == 'tarefas') ? `/posts/${props.user_id}` : `/tarefas/${props.user_id}`}
                >Ver {(props.current_page == 'tarefas') ? "Posts" : "Tarefas"}</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
    );
}

export default AppNavBarComponent;
  