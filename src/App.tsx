import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { List, ListSubheader, ListItem } from "@mui/material";

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
    <div className="App">
      <h1>Lista de usuários</h1>
      <div className="card">
        {loading ? <h2>Carregando...</h2> : null}

        <TableComponent usuarios={users}></TableComponent>
				{/* <ul>
					{users.map((user) => (
            //<li key={user.id}>{user.name}</li>
            <List sx={{ listStyleType: 'disc' }}>
              <ListItem sx={{ display: 'list-item' }} key={user.id}>{user.name} | {user.username}</ListItem>
            </List>
					))}
				</ul> */}
			</div>
    </div>
  )
}

export default App
