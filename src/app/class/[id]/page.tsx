'use client';
import { useParams } from 'next/navigation';
import React from 'react';

import ClassPage from 'components/ClassPage';

export default function Page() {
	const params = useParams<{ id: string }>();
	console.log(params);

	return <ClassPage classId={params.id} />;
}
