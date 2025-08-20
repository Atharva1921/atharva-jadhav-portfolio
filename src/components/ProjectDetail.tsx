import { Building, Calendar, FileText } from "lucide-react";
import type { ExperienceNode } from "./ExperienceSection";

type ProjectDetailProps = {
	project: ExperienceNode | null;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <FileText className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 font-light">
                    Select a project to view details
                </p>
            </div>
        );
    }

    return (
					<div className="animate-in fade-in duration-300">
						{/* Project Header */}
						<div className="mb-6 pb-6 border-b border-gray-200">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
								<h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
									{project.details.title}
								</h3>
								<div className="flex items-center text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
									<Calendar className="w-3 h-3 mr-1" />
									{project.details.duration}
								</div>
							</div>
							<div className="flex items-center text-gray-600 mb-4">
								<span className="font-medium">{project.details.role}</span>
								<span className="mx-2 text-gray-400">•</span>
								<Building className="w-4 h-4 mr-1" />
								<span>{project.details.company}</span>
							</div>
						</div>

						{/* Description */}
						<div className="mb-6">
							<h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide flex items-center">
								<FileText className="w-4 h-4 mr-2" />
								Project Overview
							</h4>
							<p className="text-gray-600 leading-relaxed">
								{project.details.description}
							</p>
						</div>

						{/* Technologies */}
						<div className="mb-6">
							<h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
								Technologies Used
							</h4>
							<div className="flex flex-wrap gap-2">
								{project.details.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Key Achievements */}
						<div className="mb-6">
							<h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
								Key Achievements
							</h4>
							<div className="space-y-3">
								{project.details.achievements.map((achievement) => (
									<div key={achievement} className="flex items-start">
										<div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
										<p className="text-gray-600 text-sm leading-relaxed">
											{achievement}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Impact */}
						{/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Impact
                    </h4>
                    <p className="text-gray-700 font-medium">{project.impact}</p>
                </div> */}
					</div>
				);
};

export default ProjectDetail;