import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container, CssBaseline} from "@material-ui/core";


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


export default class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: 0
        };
    }

    componentDidMount() {
        fetch("https://api.agify.io/?name=bella")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.age
                    });

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    alert(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    <CssBaseline/>
                    <Container maxWidth="md">
                        {/*<TableContainer component={Paper}>*/}
                        {/*    <Table aria-label="simple table">*/}
                        {/*        <TableHead>*/}
                        {/*            <TableRow>*/}
                        {/*                <TableCell>Id</TableCell>*/}
                        {/*                <TableCell>Name</TableCell>*/}
                        {/*                <TableCell>Role</TableCell>*/}
                        {/*            </TableRow>*/}
                        {/*        </TableHead>*/}
                        {/*        <TableBody>*/}
                        {/*            {rows.map((row) => (*/}
                        {/*                <TableRow key={row.name}>*/}
                        {/*                    <TableCell component="th" scope="row">*/}
                        {/*                        {row.name}*/}
                        {/*                    </TableCell>*/}
                        {/*                    <TableCell>{row.calories}</TableCell>*/}
                        {/*                    <TableCell>{row.fat}</TableCell>*/}
                        {/*                </TableRow>*/}
                        {/*            ))}*/}
                        {/*        </TableBody>*/}
                        {/*    </Table>*/}
                        {/*</TableContainer>*/}

                        {items}
                        {/*<ul>*/}
                        {/*    {items.map(item => (*/}
                        {/*        <li key={item.id}>*/}
                        {/*            {item.name} {item.role}*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}

                    </Container>
                </React.Fragment>
            );
        }
    }
}
