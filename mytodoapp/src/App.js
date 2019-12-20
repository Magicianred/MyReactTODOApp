import React, { useState } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import { Button, Paper, Card, CardContent, TextField, Container, Typography } from '@material-ui/core';

function App() {
	const [title, handleTitle] = useState('');
	const [data, handleData] = useState('');
	const [list, setList] = useState([]);
	const [color, setColor] = useState([]);

	const saveItem = () => {
		setList((e) => [...e, title + ': ' + data]);

		function chooseColor(array = []) {
			for (let i = 0; i < color.length + 1; i++) {
				array.push(randomColor());
			}
		}

		const myColors = [];
		chooseColor(myColors);
		console.log(myColors);
		setColor(myColors);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	const clearInput = () => {
		handleData('');
		handleTitle('');
	};

	const handleRemoveItem = (id) => {
		const l = [...list];
		l.splice(id, 1);
		setList(l);
	};
	const showTable = () => {
		return (
			<Container>
				{list.map((e, k) => (
					<Paper key={k} style={{ backgroundColor: 'black' }}>
						<Card style={{ backgroundColor: color[k] }} raised={true} width="200px">
							<CardContent
								style={{
									textAlign: 'left',
									minHeight: '400px'
								}}
							>
								<Typography style={{ fontSize: '40px' }}>{e}</Typography>
							</CardContent>
						</Card>

						<Button onClick={() => handleRemoveItem(k)} variant="outlined" color="secondary">
							Done
						</Button>
						<br />
						<br />
					</Paper>
				))}
			</Container>
		);
	};
	const deleteList = () => {
		setList([]);
		console.log(list);
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
							onKeyDown={handleKeyDown}
							onChange={(e) => handleTitle(e.target.value)}
							value={title}
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
							onKeyDown={handleKeyDown}
							onChange={(e) => handleData(e.target.value)}
							value={data}
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

					{showTable()}
					<hr style={{ width: '50%' }} />
					<Button size="large" variant="outlined" color="secondary" onClick={(e) => deleteList(e)}>
						Clear <br></br> List
					</Button>
					<br />
				</Container>

				<h1 style={{ color: 'white', textAlign: 'center', alignContent: 'baseline' }}>programandoconro</h1>
			</Container>
		</div>
	);
}

export default App;
