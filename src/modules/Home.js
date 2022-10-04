import React,{useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from 'react-redux'
import {loadUsers,deleteUser} from './../store/action/action'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Home =()=> {
  let dispatch = useDispatch()
  let {users} = useSelector(state=>state.usersReducer)
  let navigate = useNavigate()
  useEffect(()=>{
    dispatch(loadUsers())
  },[])

  return (
    <>
    <TableContainer component={Paper} style={{marginTop:"200px"}}>
    <Button variant="outlined" color="secondary" style={{marginLeft:"50%"}} onClick={()=>navigate('/addUser')}>
    ADD USer
     </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length>0?users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">
              <Button variant="outlined" color="success" onClick={()=>navigate(`/editUser/${row.id}`)}>
               EDIT
            </Button>
                <Button variant="outlined" color="error" style={{marginLeft:'10px'}} onClick={()=>dispatch(deleteUser(row.id))}>
                  DELETE
                  </Button>
              </TableCell>
            </TableRow>
          )):"Loading..."}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Home
