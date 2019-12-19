import React, { useState } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import { Button, Paper, Card, Input, CardContent } from '@material-ui/core';

function App() {
	const [title, handleTitle] = useState('');
	const [data, handleData] = useState('');
	const [list, setList] = useState([]);

	const saveItem = () => {
		setList((e) => [...e, title + ': ' + data]);
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
			<div>
				{list.map((e, k) => (
					<div>
						<Paper>
							<li key={k}>
								<Card raised="true" width="200px">
									<CardContent
										style={{
											textAlign: 'left',
											backgroundColor: randomColor(),
											width: window.screen.width
										}}
									>
										<p>{e}</p>
									</CardContent>
								</Card>

								<Button
									onClick={() => handleRemoveItem(k)}
									size="big"
									variant="outlined"
									color="secondary"
								>
									Done
								</Button>
							</li>
						</Paper>
						<br></br>
						<br></br>
					</div>
				))}
			</div>
		);
	};
	const deleteList = () => {
		setList([]);
		console.log(list);
	};
	return (
		<div style={{ backgroundColor: 'black', height: window.screen.height }}>
			<div className="container">
				<h1 style={{ textAlign: 'center', color: 'white' }}>My TODO App </h1>
				<div>
					<div className="Todo">
						<div>
							<br></br>
							<br></br>
							<form>
								<Input
									color="secondary"
									style={{ height: '50px', width: '500px', backgroundColor: 'white' }}
									placeholder="Subject:"
									onKeyDown={handleKeyDown}
									onChange={(e) => handleTitle(e.target.value)}
									value={title}
									multiple={true}
								></Input>
								<br />
								<Input
									placeholder="Description:"
									multiline="true"
									className="input"
									style={{
										alignItems: 'initial',
										height: '150px',
										width: '500px',
										backgroundColor: 'white'
									}}
									onKeyDown={handleKeyDown}
									onChange={(e) => handleData(e.target.value)}
									value={data}
								></Input>
								<br />
							</form>
						</div>

						<div>
							<Button
								size="small"
								variant="contained"
								color="primary"
								onClick={(e) => {
									saveItem(e);
								}}
							>
								Save
							</Button>
							<br></br>

							<Button
								size="small"
								variant="outlined"
								color="secondary"
								className="Delete-Button"
								onClick={(e) => {
									clearInput(e);
								}}
							>
								Clear
							</Button>
							<hr />
						</div>
						<div className="container">{showTable()}</div>
						<hr style={{ width: '50%' }} />
						<Button size="small" variant="outlined" color="secondary" onClick={(e) => deleteList(e)}>
							Clear <br></br> List
						</Button>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
			<h1 style={{ color: 'white', textAlign: 'center', alignContent: 'baseline' }}>programandoconro</h1>
		</div>
	);
}

export default App;
