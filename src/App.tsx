import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { List, ListSubheader, ListItem, Box } from "@mui/material";

import { Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = (props:any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bold" }}>Nome</TableCell>
            <TableCell sx={{fontWeight: "bold" }}>Username</TableCell>
            <TableCell sx={{fontWeight: "bold" }}>E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.usuarios.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


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
      <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 40, color: '#EC7E31' }}>Lista de Usuários</Typography>
        {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}

        <TableComponent usuarios={users}></TableComponent>
        
    </Box>
  )
}

export default App
