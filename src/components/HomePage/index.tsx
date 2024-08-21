import { AboutSection } from './AboutSection';
import { HeroSection } from './HeroSection';
import { ParticipateSection } from './ParticipateSection';
import { TeamSection } from './TeamSection';

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			{/* <TeamSection /> */}
			<ParticipateSection />
		</>
	);
};
