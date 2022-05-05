import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, IconButton, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { api } from '../services/api';


interface UserProps {
    user: ReadonlyArray<{
        name: string;
        email: string;
        phoneNumber: string;
		_id?: any; 
    }>
}

export const TableUsersAdmin = (props: UserProps) => {
	const { user } = props;

	return (
		<React.Fragment>
			<Box sx={{background: 'white'}}>
				<Typography variant='h5' align='center' sx={{position: 'static',mt: 4, width: '100vw', color: 'black'}}>
                Usuários
				</Typography>
			</Box>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Id User</TableCell>
						<TableCell>name</TableCell>
						<TableCell>email</TableCell>
						<TableCell>phone</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{user.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell>{row.phoneNumber}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
};
