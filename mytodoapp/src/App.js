import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Paper, Card, CardContent, TextField, Container, Typography } from '@material-ui/core';
import MyColors from './colors';
import firebase from 'firebase';
import './firebase';

const db = firebase.database().ref('/todos/');

function App() {
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [color, setColor] = useState([]);
	const [thingsToDo, handleThingsTodo] = useState([])
	
	const dbb = () => firebase.database();
	useEffect(() => {
		dbb().ref('/todos/');
		
	  });

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
		db.push('Subject: ' + subject + '/ Description: ' + description);
	};

	const clearInput = () => {
		setDescription('');
		setSubject('');
	};

	const deletetodoList = () => {
		setTodoList([]);
	};

	const deleteAll = () => {
		
		if (window.confirm('Delete all?')) {

			db.set('')
		}
		else{
			console.log('Database did no change')
		}

	}

	const handleRemoveItem = (id) => {
		const l = [...todoList];
		l.splice(id, 1);
		setTodoList(l);
	};

	const showThingsToDo = () =>{
		const data =() => {
			dbb().ref('/todos/').on('value',handleThingsTodo)

			
		}
		const tabla = JSON.stringify(thingsToDo);
        const myTabla = tabla.split(',').map((item,key)=>(
		<Container>
			<Paper key={key} style={{ backgroundColor: 'black' }}>
									<Card style={{ backgroundColor: color[key] }} raised={true} width="200px">
		
						{	
							item.slice(24)
							
						}
					</Card>
					</Paper>
					<br />

					</Container>
		))
		return(
<Container>
			<Button
			size="large"
			variant="outlined"
			color="primary"
			onClick={(e) => {
				data(e);
			}}
		>
             Show
			</Button>

{myTabla}
</Container>
		)	
	}

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
					<br />
					<Button
						size="large"
						variant="outlined"
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
							<Container>
								<Paper key={k} style={{ backgroundColor: 'black' }}>
									<Card style={{ backgroundColor: color[k] }} raised={true} width="200px">
										<CardContent
											style={{
												textAlign: 'left',
												minHeight: '400px'
											}}
										>
											{e}
										</CardContent>
									</Card>
									<Button onClick={() => handleRemoveItem(k)} variant="outlined" color="secondary">
										Done
									</Button>
								</Paper>
								<br />
							</Container>
						))}
					</Container>
					<hr style={{ width: '50%' }} />
					<Button size="large" variant="outlined" color="secondary" onClick={(e) => deletetodoList(e)}>
						Clear <br></br>
					</Button>
					<br />
				</Container>

				<Container className="Todo">

					<h5 style={{color:'white', textAlign: 'center', fontSize: 'calc(25px + 2vmin)' }}> Things to do: </h5>
				
				
				{showThingsToDo()}
				a
				<Button
						size="large"
						variant="outlined"
						color="secondary"
						onClick={(e) => {
							deleteAll(e);
						}}
						
					>
						Delete all
					</Button>
				</Container>
				<Typography style={{ color: 'white', textAlign: 'center', fontSize: 'calc(25px + 2vmin)' }}>
					programandoconro
				</Typography>
			</Container>
		</div>
	);
}

export default App;
