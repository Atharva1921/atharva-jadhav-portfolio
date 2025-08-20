import { useState } from "react";
import { Folders } from "lucide-react";
import ProjectDetail from "./ProjectDetail";
import FileTree from "./FileTree";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./Resizable";


export type ProjectDetails = {
	title: string;
	company: string;
	role: string;
	duration: string;
	description: string;
	technologies: string[];
	achievements: string[];
	impact: string;
};

export type ExperienceNode = {
	id: string;
	type: "file";
	label: string;
	details: ProjectDetails;
};

export type ExperienceData = {
	id: string;
	type: "folder";
	label: string;
	children?: ExperienceNode[];
};

const ExperienceSection = () => {
	const [selectedProject, setSelectedProject] = useState<ExperienceNode | null>(
		null,
	);

	const experienceData: ExperienceData[] = [
		{
			id: "2023-present",
			type: "folder",
			label: "2023 - Present",
			children: [
				{
					id: "e-commerce-platform",
					type: "file",
					label: "E-commerce Platform Redesign",
					details: {
						title: "E-commerce Platform Redesign",
						company: "Tech Company Inc.",
						role: "Senior Software Engineer",
						duration: "Mar 2023 - Present",
						description:
							"Led the complete redesign and modernization of a legacy e-commerce platform serving 100K+ daily users. Implemented microservices architecture and improved performance by 60%.",
						technologies: [
							"React",
							"Node.js",
							"AWS",
							"TypeScript",
							"Redis",
							"PostgreSQL",
						],
						achievements: [
							"Reduced page load times from 4.2s to 1.6s through optimization",
							"Implemented CI/CD pipeline resulting in 90% faster deployments",
							"Mentored 3 junior developers and established code review standards",
							"Architected real-time inventory system handling 10K+ concurrent users",
						],
						impact:
							"60% performance improvement, 40% increase in user engagement",
					},
				},
				{
					id: "ai-chatbot-integration",
					type: "file",
					label: "AI Chatbot Integration",
					details: {
						title: "AI Customer Support Chatbot",
						company: "Tech Company Inc.",
						role: "Senior Software Engineer",
						duration: "Sep 2023 - Dec 2023",
						description:
							"Developed and integrated an AI-powered customer support chatbot that reduced support ticket volume by 45% and improved customer satisfaction scores.",
						technologies: [
							"Python",
							"FastAPI",
							"OpenAI API",
							"React",
							"WebSocket",
							"Docker",
						],
						achievements: [
							"Built natural language processing pipeline for customer queries",
							"Integrated with existing CRM system and knowledge base",
							"Implemented real-time chat interface with typing indicators",
							"Created comprehensive analytics dashboard for support metrics",
						],
						impact:
							"45% reduction in support tickets, 25% improvement in response time",
					},
				},
			],
		},
	];

	return (
		<div className="flex flex-col justify-center items-center relative px-4 md:px-8 py-10 w-full">
			<div className="max-w-7xl mx-auto w-full">
				{/* Interactive Experience Explorer */}
				<div className="flex items-start h-[600px]">
					<ResizablePanelGroup
						direction="horizontal"
						className="h-[100vh] w-full rounded-lg"
					>
						{/* Left Explorer */}
						<ResizablePanel defaultSize={35} minSize={25} maxSize={40}>
							{/* File Tree */}
							<div className="bg-white border border-gray-200 shadow-sm overflow-hidden h-full w-full">
								<div className="p-6 border-b border-gray-100 bg-gray-50">
									<h3 className="text-lg font-semibold text-gray-900 flex items-center">
										<Folders className="w-5 h-5 mr-2 text-primary" />
										Projects
									</h3>
								</div>
								<div className="p-4 max-h-96 overflow-y-auto">
									<div className="font-mono text-sm">
										<FileTree
											data={experienceData}
											setSelectedProject={setSelectedProject}
											selectedProject={selectedProject}
										/>
									</div>
								</div>
							</div>
						</ResizablePanel>

						<ResizableHandle withHandle />
						{/* Right Editor */}
						<ResizablePanel defaultSize={80}>
							{/* Detail View */}
							<div className="bg-white border border-gray-200 shadow-sm h-full w-full">
								<div className="p-6 h-full">
									<ProjectDetail project={selectedProject} />
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
