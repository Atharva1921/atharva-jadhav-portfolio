import { FileText } from "lucide-react";
import type { ExperienceNode } from "@/types/types";

export const ProjectDetail = ({ project }: { project: ExperienceNode | null }) => {
	if (!project) {
		return (
			<div className="flex items-center justify-center h-full text-gray-500">
				<div className="text-center">
					<FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
					<p className="text-lg mb-2">Welcome to Experience Explorer</p>
					<p className="text-sm">
						Select a project from the explorer to view details
					</p>
				</div>
			</div>
		);
	}

	const { details } = project;

	return (
		<div className="p-6 h-full overflow-y-auto">
			<div className="max-w-4xl">
				<div className="mb-6">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						{details.title}
					</h1>
					<div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
						<span className="font-medium">{details.company}</span>
						<span>•</span>
						<span>{details.role}</span>
						<span>•</span>
						<span>{details.duration}</span>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-3">
						Description
					</h2>
					<p className="text-gray-700 leading-relaxed">{details.description}</p>
				</div>

				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-3">
						Technologies
					</h2>
					<div className="flex flex-wrap gap-2">
						{details.technologies.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-3">
						Key Achievements
					</h2>
					<ul className="space-y-2">
						{details.achievements.map((achievement) => (
							<li key={achievement} className="flex items-start">
								<span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
								<span className="text-gray-700">{achievement}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-3">Impact</h2>
					<div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
						<p className="text-green-800 font-medium">{details.impact}</p>
					</div>
				</div>
			</div>
		</div>
	);
};