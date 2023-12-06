import { GenreSection } from './GenreSection';
import { HowIsSection } from './HowIsSection';
import { LanguageSection } from './LanguageSection';
import { StyleSection } from './StyleSection';
import { WhatIsSection } from './WhatIsSection';

export const InformationPage = () => {
	return (
		<>
			<WhatIsSection />
			<HowIsSection />
			<GenreSection />
			<StyleSection />
			<LanguageSection />
		</>
	);
};
