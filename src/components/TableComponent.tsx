import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const TableComponent = (props:any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bold" }}>Nome</TableCell>
            <TableCell sx={{fontWeight: "bold" }}>Username</TableCell>
            <TableCell sx={{fontWeight: "bold" }}>E-mail</TableCell>
            <TableCell sx={{fontWeight: "bold" }}>Tarefas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.usuarios.map((row: any) => (

            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell><Link to={`/tarefas/${row.id}`}>Ver Tarefas</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;