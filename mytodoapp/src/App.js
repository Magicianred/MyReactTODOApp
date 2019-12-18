import React, { useState } from 'react';
import './App.css';
import randomColor from 'randomcolor';

function App() {
	const [ data, handleData ] = useState(' ');
	const [ list, setList ] = useState([]);

	const saveItem = () => {
		setList((e) => [ ...e, data ]);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	const handleRemoveItem = (id) => {
		const l = [ ...list ];
		l.splice(id, 1);
		setList(l);
	};
	const showTable = () => {
		return (
			<div>
				{list.map((e, k) => (
					<li style={{ backgroundColor: randomColor() }} key={k}>
						<p>
							{e}
							<br />
							<button color={'red'} onClick={() => handleRemoveItem(k)}>
								Done
							</button>
						</p>
					</li>
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
				<div className="App-header">
					<p className="Input-todo">{data}</p>
					<div>
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
						<button
							className="Save-Button"
							onClick={(e) => {
								saveItem(e);
							}}
						>
							Save
						</button>
						<hr />
					</div>
					<div>{showTable()}</div>
					<hr style={{ width: '50%' }} />
					<button onClick={(e) => deleteList(e)}> Delete List</button>
				</div>
				<h1>programandoconro</h1>
			</div>
		</div>
	);
}

export default App;
