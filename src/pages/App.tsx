import { useState, useEffect } from "react";
import "../App.css";
import { List, ListSubheader, ListItem, Box } from "@mui/material";

import { Typography } from '@mui/material';
import TableComponent from "../components/TableComponent";

const App = (props: any) => {
	const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {
        setUsers(json); 
        setLoading(false)
      });
  });
  
  
	return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Typography variant='h3' sx={{ fontFamily: 'Comfortaa', color: '#EC7E31' }}>Lista de Usuários</Typography>
        {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}
        <TableComponent usuarios={users}></TableComponent>
    </Box>
  )
}

export default App
