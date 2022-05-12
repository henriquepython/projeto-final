import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { useAppContext } from '../contexts';

export const TableUsersAdmin = () => {
	const { userAll } = useAppContext();

	return (
		<>
			<Typography 
				variant='h5'
				sx={{ mb: 2 ,width: '100%', display: 'flex', justifyContent: 'center'}}
			>
				Usuários Cadastrados
			</Typography>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Nº</TableCell>
						<TableCell>Id User</TableCell>
						<TableCell>name</TableCell>
						<TableCell>email</TableCell>
						<TableCell>phone</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userAll.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{index+1}</TableCell>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell>{row.phoneNumber}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};