const Education = () =>{
    const education = [
		{
			university: 'Etovos Lorand University',
			period: 'Jan 2024 - Mar 2025',
			Specialization: 'Master\'s in Informatics ',
            GRP:'4.5'
		},
		{
			university: 'Dr M.G.R University and Research Institute',
			period: 'Jan 2024 - Mar 2025',
			Specialization: 'Bachelor\'s in Computer Science',
            GRP:'4.5'
		}
	];
    return <>
        <div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Education</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

                <div className="space-y-5">
					{education.map((exp) => (
						<div key={exp.university} className="relative">
							<div className="relative pl-4 ">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full" />
								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.university}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.Specialization}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
    </>
}

export default Education;