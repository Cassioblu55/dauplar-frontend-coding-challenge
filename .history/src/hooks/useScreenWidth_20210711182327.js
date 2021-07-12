import { useEffect, useState } from 'react';
import { useDisplayColumns } from './useScreenType';

export function useScreenWidth(): number {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handler = (event: any) => {
			setWidth(event.target.innerWidth);
		};

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, []);

	return width;
}

export function useCreateRows(items, minCol = 1, maxCol = 12) {
	const displayColumns = useDisplayColumns();
	const defaultColumnNumber =  displayColumns.numberOfColumns

	const numberOfColumns =
		defaultColumnNumber < minCol
			? minCol
			: defaultColumnNumber > maxCol
			? maxCol
			: defaultColumnNumber;

	let rows = [];
	if (items === undefined || typeof items !== 'object') {
		rows = [];
	} else {
		try {
			let row = [];
			items.forEach((item, index) => {
				if (index !== 0 && index % numberOfColumns === 0) {
					rows.push(row);
					row = [];
				}

				row.push(item);

				if (index + 1 === items.length) {
					rows.push(row);
				}
			});
		} catch {
			rows = [];
		}
	}

	return {
		rows: rows,
		columnSize: displayColumns.getColumnSize(numberOfColumns),
	};
}
