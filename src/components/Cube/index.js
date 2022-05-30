import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './cube.css';
import Button from '../Button';
import Table from '../Table';

const Cube = () => {
	const [rows, setRows] = useState([1, 2, 3, 4]);
	const [cols, setCols] = useState([1, 2, 3, 4]);
	const [currentRow, setCurrentRow] = useState(null);
	const [currentCol, setCurrentCol] = useState(null);

	const deleteRowsButton = document.getElementById('deleteRowsButton');
	const deleteColsButton = document.getElementById('deleteColsButton');

	const item = uuid();

	const addRows = () => {
		const arr = rows.concat();
		arr.push(item);
		setRows(arr);
	};

	const addCols = () => {
		const arr = cols.concat();
		arr.push(item);
		setCols(arr);
	};

	const deleteRows = () => {
		const arr = rows.concat();
		arr.splice(currentRow, 1);
		setRows(arr);
		if (arr.length === currentRow) {
			deleteRowsButton.style.top = `${(currentRow - 1) * 38}px`;
		}
	};

	const deleteCols = () => {
		const arr = cols.concat();
		arr.splice(currentRow, 1);
		setCols(arr);
		if (arr.length === currentCol) {
			deleteColsButton.style.left = `${(currentCol - 1) * 38}px`;
		}
	};

	const showDeleteButton = () => {
		if (deleteRowsButton && deleteColsButton) {
			if (rows.length > 1) {
				deleteRowsButton.style.visibility = 'visible';
			}

			if (cols.length > 1) {
				deleteColsButton.style.visibility = 'visible';
			}
		}
	};

	const hideDeleteButton = () => {
		if (deleteRowsButton && deleteColsButton) {
			deleteRowsButton.style.visibility = 'hidden';
			deleteColsButton.style.visibility = 'hidden';
		}
	};

	const currentCursorPosition = (e) => {
		if (e.target.nodeName === 'TD') {
			const rowIndex = e.target.parentNode.rowIndex;
			const colIndex = e.target.cellIndex;
			setCurrentRow(rowIndex);
			setCurrentCol(colIndex);
			if (deleteRowsButton && deleteColsButton) {
				deleteRowsButton.style.top = e.target.offsetTop - 1 + 'px';
				deleteColsButton.style.left = e.target.offsetLeft + 'px';
			}
		}
	};

	return (
		<div className='content'>
			<div className='deleteCol'>
				<Button
					value='&#8722;'
					className='deleteButton deleteColsButton'
					handleClick={deleteCols}
					id='deleteColsButton'
					onMouseOver={showDeleteButton}
					onMouseLeave={hideDeleteButton}
				/>
			</div>
			<div className='middleContent'>
				<div className='deleteRow'>
					<Button
						value='&#8722;'
						className='deleteButton deleteRowsButton'
						handleClick={deleteRows}
						id='deleteRowsButton'
						onMouseOver={showDeleteButton}
						onMouseLeave={hideDeleteButton}
					/>
				</div>
				<Table
					rows={rows}
					cols={cols}
					onMouseEnter={showDeleteButton}
					onMouseLeave={hideDeleteButton}
					onMouseOver={currentCursorPosition}
				/>
				<Button
					value='+'
					className='addButton addColsButton'
					handleClick={addCols}
				/>
			</div>
			<div className='addRow'>
				<Button
					value='+'
					className='addButton addRowsButton'
					handleClick={addRows}
				/>
			</div>
		</div>
	);
};

export default Cube;
