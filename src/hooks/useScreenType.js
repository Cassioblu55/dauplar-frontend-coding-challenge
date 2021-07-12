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