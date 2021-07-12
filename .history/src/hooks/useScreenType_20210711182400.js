import { useScreenWidth } from './useScreenWidth';
import { theme } from '../theme';
import { useEffect, useState } from 'react';

export function useScreenType() {
	const screenWidth: number = useScreenWidth();

	const [isMobile, setIsMobile] = useState(screenWidth <= theme.mobileWidth);
	const [isSmall, setIsSmall] = useState(screenWidth <= theme.smallWidth);
	const [isMedium, setIsMedium] = useState(screenWidth <= theme.mediumWidth);
	const [isLarge, setIsLarge] = useState(screenWidth > theme.mediumWidth);

	useEffect(() => {
		setIsMobile(screenWidth <= theme.mobileWidth);
		setIsSmall(
			screenWidth <= theme.smallWidth && screenWidth > theme.mobileWidth
		);
		setIsMedium(
			screenWidth <= theme.mediumWidth && screenWidth > theme.smallWidth
		);
		setIsLarge(screenWidth > theme.mediumWidth);
	}, [screenWidth]);

	return {
		isMobile,
		isSmall,
		isMedium,
		isLarge,
		screenWidth,
	};
}

export function useDisplayColumns() {
	const screenType = useScreenType();

	const [numberOfColumns, setNumberOfColumns] = useState(1);

	function getColumnSize(
		numberOfCol = numberOfColumns
	) {
		return 12 / numberOfCol;
	}

	useEffect(() => {
		function getNumberOfColumns() {
			if (screenType.isMobile) {
				return 1;
			} else if (screenType.isSmall) {
				return 2;
			} else if (screenType.isMedium) {
				return 3;
			} else {
				return 4;
			}
		}

		setNumberOfColumns(getNumberOfColumns());
	}, [numberOfColumns, screenType]);

	return {
		numberOfColumns,
		getColumnSize,
	};
}
