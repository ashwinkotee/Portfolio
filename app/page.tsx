import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function MinimalistPortfolio() {
	return (
		<main className="h-screen md:flex bg-white dark:bg-gray-900">
			{/* Profile Section - appears first on mobile, left on desktop */}
			<div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-6 flex items-center justify-center">
				<ProfileSection />
			</div>

			{/* Right Content Section - appears second on mobile, right on desktop */}
			<div className="w-full md:w-3/5 md:h-screen md:overflow-y-auto p-6 space-y-10">
				<SkillsSection />
				<ExperienceSection />
				<Education />
				<Certifications />
			</div>
		</main>
	);
}
