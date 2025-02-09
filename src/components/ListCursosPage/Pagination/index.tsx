'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import react from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

type PaginationProps = {
	numPages: number;
	getCourses: any;
};

export function Pagination({ numPages, getCourses }: PaginationProps) {
	const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = react.useState<
		number[]
	>([]);
	const [currentButton, setCurrentButton] = react.useState(1);

	const pages = numPages;
	const numberOfPages: any = [];

	for (let i = 1; i <= pages; i++) {
		numberOfPages.push(i);
	}

	react.useEffect(() => {
		let tempNumberOfPages = [...arrayOfCurrentButtons];
		const dotsInitial = '...';
		const dotsLeft = '... ';
		const dotsRight = ' ...';

		if (pages > 5) {
			if (currentButton >= 1 && currentButton <= 3) {
				tempNumberOfPages = [
					1,
					2,
					3,
					4,
					dotsInitial,
					numberOfPages.length
				];
			} else if (currentButton === 4) {
				const sliced = numberOfPages.slice(0, 5);
				tempNumberOfPages = [
					...sliced,
					dotsInitial,
					numberOfPages.length
				];
			} else if (
				currentButton > 4 &&
				currentButton < numberOfPages.length - 2
			) {
				const sliced1 = numberOfPages.slice(
					currentButton - 2,
					currentButton
				);
				const sliced2 = numberOfPages.slice(
					currentButton,
					currentButton + 1
				);
				tempNumberOfPages = [
					1,
					dotsLeft,
					...sliced1,
					...sliced2,
					dotsRight,
					numberOfPages.length
				];
			} else if (currentButton > numberOfPages.length - 3) {
				const sliced = numberOfPages.slice(numberOfPages.length - 4);
				tempNumberOfPages = [1, dotsLeft, ...sliced];
			}
		} else {
			tempNumberOfPages = numberOfPages;
		}

		if (currentButton.toString() === dotsInitial) {
			setCurrentButton(
				arrayOfCurrentButtons[arrayOfCurrentButtons.length - 3] + 1
			);
		} else if (currentButton.toString() === dotsRight) {
			setCurrentButton(arrayOfCurrentButtons[3] + 2);
		} else if (currentButton.toString() === dotsLeft) {
			setCurrentButton(arrayOfCurrentButtons[3] - 2);
		} else {
			getCourses(currentButton);
		}

		setArrayOfCurrentButtons(tempNumberOfPages);
	}, [currentButton]);

	return (
		<div className={styles.alignContainer}>
			<div className={styles.paginationContainer}>
				<a
					className={currentButton === 1 ? styles.disabled : 'null'}
					onClick={() => {
						setCurrentButton((prev) =>
							prev === 1 ? prev : prev - 1
						);
						getCourses(currentButton);
					}}
				>
					<FiChevronLeft />
				</a>
				{arrayOfCurrentButtons.map((page, index) => {
					return (
						<a
							className={
								currentButton === page ? styles.active : 'null'
							}
							key={index}
							onClick={() => {
								const teste = page;
								setCurrentButton(teste);
							}}
						>
							{page}
						</a>
					);
				})}
				<a
					className={
						currentButton === numberOfPages.length
							? styles.disabled
							: 'null'
					}
					onClick={() => {
						setCurrentButton((prev) =>
							prev === numberOfPages.length ? prev : prev + 1
						);
						getCourses(currentButton);
					}}
				>
					<FiChevronRight />
				</a>
			</div>
		</div>
	);
}
