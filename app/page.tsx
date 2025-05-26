import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column - Scrollable */}
				<div className="md:col-span-3 overflow-y-auto h-full p-4 space-y-8">
					{/* Skills Section */}
					<SkillsSection />

					{/* Experience Section */}
					<ExperienceSection />

					{/* Education */}
					<Education />

					{/* Certifications */}
					<Certifications />
				</div>
			</div>
		</main>
	);
}

