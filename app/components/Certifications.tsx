const Certifications = () =>{

    const certificates = [{
        title:"AWS Certified Cloud Practitioner (CLF-C02)"
    },{title:"Azure Fundamentals (AZ-900)"}]
    return <>
    <div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Certifications</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{certificates.map((exp) => (
						<div key={exp.title} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.title}</h4>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
        
    </>
}

export default Certifications;