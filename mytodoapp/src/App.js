import React, { useState } from 'react';
import './App.css';
import { Button, Paper, Card, CardContent, TextField, Container, Typography } from '@material-ui/core';
import MyColors from './colors';

function App() {
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [color, setColor] = useState([]);

	const saveItem = () => {
		setColor(MyColors);
		setTodoList((e) => [
			...e,
			<Container>
				<Card>{subject + ': '} </Card>
				<hr />
				<Card> {description}</Card>
			</Container>
		]);
	};

	const clearInput = () => {
		setDescription('');
		setSubject('');
	};

	const deletetodoList = () => {
		setTodoList([]);
	};

	const handleRemoveItem = (id) => {
		const l = [...todoList];
		l.splice(id, 1);
		setTodoList(l);
	};

	return (
		<div className="App">
			<Container className="container">
				<Typography
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 'calc(25px + 2vmin)'
					}}
				>
					My TODO App{' '}
				</Typography>
				<Container className="Todo">
					<Card>
						<TextField
							style={{ padding: '10%', backgroundColor: 'white', minWidth: '500px' }}
							placeholder="Subject:"
							onChange={(e) => setSubject(e.target.value)}
							value={subject}
							multiple={true}
						></TextField>
						<TextField
							placeholder="Description:"
							multiline={true}
							className="input"
							style={{
								alignItems: 'initial',
								minHeight: '200px',
								minWidth: '500px',
								backgroundColor: 'white'
							}}
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						></TextField>
					</Card>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={(e) => {
							saveItem(e);
						}}
					>
						Save
					</Button>
					<Button
						size="large"
						variant="outlined"
						color="secondary"
						onClick={(e) => {
							clearInput(e);
						}}
					>
						Clear
					</Button>
					<hr />
					<Container>
						{todoList.map((e, k) => (
							<Paper key={k} style={{ backgroundColor: 'black' }}>
								<Card style={{ backgroundColor: color[k] }} raised={true} width="200px">
									<CardContent
										style={{
											textAlign: 'left',
											minHeight: '400px'
										}}
									>
										<Typography style={{ fontSize: 'calc(25px + 2vmin)' }}>{e}</Typography>
									</CardContent>
								</Card>
								<Button onClick={() => handleRemoveItem(k)} variant="outlined" color="secondary">
									Done
								</Button>
							</Paper>
						))}
					</Container>
					<hr style={{ width: '50%' }} />
					<Button size="large" variant="outlined" color="secondary" onClick={(e) => deletetodoList(e)}>
						Clear <br></br>
					</Button>
					<br />
				</Container>
				<Typography style={{ color: 'white', textAlign: 'center', fontSize: 'calc(25px + 2vmin)' }}>
					programandoconro
				</Typography>
			</Container>
		</div>
	);
}

export default App;