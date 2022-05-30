import React from 'react';
import './table.css';
import Cell from '../Cell';

const Table = (props) => {
	const { rows, cols, onMouseLeave, onMouseOver, onMouseEnter } = props;

	return (
		<>
			<table
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseOver={onMouseOver}
				id='table'
			>
				<tbody>
					{rows.map((row) => (
						<tr key={row}>
							{cols.map((col, index) => (
								<Cell key={col} value={index} />
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
