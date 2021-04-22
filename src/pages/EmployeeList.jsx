import React, {Component} from 'react';
import TableComponent from '../components/table/Table';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { DataGrid }  from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';

const RegisterPageStyles = styled.aside`
  width: 96%;
  margin: 1rem auto 0;

  header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  .create-account {
    margin-top: 2rem;
  }
  .MuiDataGrid-root {
    height: 400px;
  }
  .MuiDataGrid-colCell {
    min-width: unset;
    max-width: unset;
  }
`

class EmployeeList extends Component {

    render() {
        // const classes = useStyles();
        const columns = [{
            field: 'index',
            headerName: '',
            width: 20
        },{
            headerName: 'Name',
            field: 'name',
            width: 150
        },{
            headerName: 'Date Of Birth',
            field: 'dob',
            width: 150
        },{
            headerName: 'Address',
            field: 'address',
            width: 200
        },{
            headerName: 'Email',
            field: 'email',
            width: 150
        },{
            headerName: 'Phone No',
            field: 'phone',
            width: 150
        }];

        const data = [
            {
                id: 1,
                index: 1,
                name: 'James',
                email: 'james"mail.com',
                address: '12, stephen street',
                dob: '10-10-1997',
                phone: '22 5555 6666',
            },
            {
                id: 2,
                index: 2,
                name: 'James',
                email: 'james"mail.com',
                address: '12, stephen street',
                dob: '10-10-1997',
                phone: '22 5555 6666',
            }
        ];


        return (
            <RegisterPageStyles>
                <header>
                    <h4><b>Employees List</b></h4>
                    <div style={{ height: 400, width: '100%', marginTop: '10px' }}>
                    <DataGrid rows={[...data]} columns={columns} pageSize={5} />
                    </div>
                </header>
            </RegisterPageStyles>
        )
    }
}

export default EmployeeList;
