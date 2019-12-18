import React, { useState } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import { Button, Paper, Card, Typography } from '@material-ui/core';

function App() {
	const [data, handleData] = useState(' ');
	const [list, setList] = useState([]);

	const saveItem = () => {
		setList((e) => [...e, data]);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	const clearInput = () => {
		handleData('');
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
					<Paper>
						<li key={k}>
							<Card style={{ backgroundColor: randomColor() }} size="big">
								<p>
									{e}
									<br></br>
								</p>
							</Card>
							<Button color="secondary" onClick={() => handleRemoveItem(k)}>
								Done
							</Button>
						</li>
					</Paper>
				))}
			</div>
		);
	};

	const deleteList = () => {
		setList([]);
		console.log(list);
	};
	return (
		<div>
			<div className="App">
				<h1>My TODO App</h1>
				<div className="Todo">
					<div>
						<br></br>
						<h1>Input todo</h1>
						<form>
							<input
								onKeyDown={handleKeyDown}
								onChange={(e) => handleData(e.target.value)}
								value={data}
							/>
							<hr />
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
						<p className="Input-todo">{data}</p>
					</div>
					<div>{showTable()}</div>
					<hr style={{ width: '50%' }} />
					<Button size="small" variant="outlined" color="secondary" onClick={(e) => deleteList(e)}>
						Clear <br></br> List
					</Button>
				</div>
				<h1>programandoconro</h1>
			</div>
		</div>
	);
}

export default App;
