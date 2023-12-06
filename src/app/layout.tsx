import type { Metadata } from 'next';

import { Providers } from 'components/Providers';

import 'styles/globals.css';

export const metadata: Metadata = {
	title: 'Nises Project'
	// icons: {
	// 	shortcut: { url: '/favicon.ico', type: 'image/x-icon' }
	// }
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
