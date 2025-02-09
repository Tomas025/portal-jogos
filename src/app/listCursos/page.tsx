'use client';
import { useState } from 'react';

import ListCursosPage from 'components/ListCursosPage';

export default function ListCursos() {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<ListCursosPage
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	);
}
