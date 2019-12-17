import React, { useState } from 'react';
import './App.css';

function App() {
	const [ data, handleData ] = useState(' ');
	const [ list, setList ] = useState([]);

	const saveItem = () => {
		setList((e) => [ ...e, data ]);
		console.log(list);
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
					<li key={k}>
						<p className="Input-box">
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
		<div className="App">
			<div className="App-header">
				<p className="Input-todo">{data}</p>
				<div className="Input-Form">
					<form>
						<input onKeyDown={handleKeyDown} onChange={(e) => handleData(e.target.value)} value={data} />
						<hr />
					</form>
				</div>
				<div>
					<button className="Save-Button" onClick={(e) => saveItem(e)}>
						Save
					</button>
					<hr />
				</div>
				<div>{showTable()}</div>
				<hr style={{ width: '50%' }} />
				<button onClick={(e) => deleteList(e)}> Delete List</button>
			</div>
		</div>
	);
}

export default App;
