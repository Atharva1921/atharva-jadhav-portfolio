import { useState, useEffect } from "react";
import {
	Folders,
	X,
	File,
	Settings,
	Search,
	GitBranch,
	Bug,
	Package,
} from "lucide-react";
import { ProjectDetail } from "./ProjectDetail";
import { experienceData } from "@/data/data";
import type { ExperienceNode } from "@/types/types";
import { FileTree } from "./FileTree";


const WorkSection = () => {
	const [selectedProject, setSelectedProject] = useState<ExperienceNode | null>(
		null,
	);
	const [openTabs, setOpenTabs] = useState<ExperienceNode[]>([]);
	const [activeTabId, setActiveTabId] = useState<string | null>(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
			if (window.innerWidth >= 768) {
				setSidebarOpen(true);
			}
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const openTab = (project: ExperienceNode) => {
		if (!openTabs.find((tab) => tab.id === project.id)) {
			setOpenTabs([...openTabs, project]);
		}
		setActiveTabId(project.id);
		setSelectedProject(project);

		if (isMobile) {
			setSidebarOpen(false);
		}
	};

	const closeTab = (tabId: string) => {
		const newTabs = openTabs.filter((tab) => tab.id !== tabId);
		setOpenTabs(newTabs);

		if (activeTabId === tabId) {
			const newActiveTab = newTabs[newTabs.length - 1] || null;
			setActiveTabId(newActiveTab?.id || null);
			setSelectedProject(newActiveTab || null);
		}
	};

	const switchTab = (project: ExperienceNode) => {
		setActiveTabId(project.id);
		setSelectedProject(project);
	};

	return (
		<div className="flex flex-col bg-gray-50 h-full w-full">
			{/* VS Code Title Bar */}
			<div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<span className="text-sm font-medium">Work Explorer</span>
				</div>
				<div className="flex space-x-1">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
			</div>

			<div className="flex flex-1 overflow-hidden">
				{/* Activity Bar */}
				<div className="w-12 bg-gray-900 flex flex-col items-center py-4 space-y-4">
					<Folders
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className="w-6 h-6 text-white cursor-pointer hover:text-blue-400"
					/>
					<Search className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400" />
					<GitBranch className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400" />
					<Bug className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400" />
					<Package className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400" />
					<Settings className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-400 mt-auto" />
				</div>

				{/* Sidebar */}
				<div
					className={`${
						sidebarOpen
							? "w-full md:w-80 bg-white border-r border-gray-200"
							: "w-0"
					} overflow-hidden`}
				>
					{(sidebarOpen || !isMobile) && (
						<div className="h-full flex flex-col">
							{/* Sidebar Header */}
							<div className="bg-gray-50 px-4 py-3 h-10 border-b border-gray-200 flex items-center justify-between">
								<h4 className="text-sm font-semibold text-gray-900 flex items-center">
									Atharva's Projects
								</h4>
								{isMobile && (
									<button
										type="button"
										onClick={() => setSidebarOpen(false)}
										className="p-1 hover:bg-gray-200 rounded"
									>
										<X className="w-4 h-4" />
									</button>
								)}
							</div>

							{/* File Tree */}
							<div className="flex-1 p-2 overflow-y-auto">
								<FileTree
									data={experienceData}
									setSelectedProject={openTab}
									selectedProject={selectedProject}
								/>
							</div>
						</div>
					)}
				</div>

				{/* Main Content */}
				<div className="flex-1 flex flex-col overflow-hidden">
					{/* Tab Bar */}
					<div className="bg-gray-100 h-10 border-b border-gray-200 flex items-center overflow-x-auto">
						{openTabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								className={`flex items-center px-4 py-2 border-r border-gray-200 cursor-pointer min-w-0 max-w-xs group ${
									activeTabId === tab.id
										? "bg-white text-gray-900 border-b-2 border-blue-500"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}
								onClick={() => switchTab(tab)}
							>
								<File className="w-4 h-4 mr-2 flex-shrink-0" />
								<span className="text-sm truncate mr-2">{tab.label}</span>
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										closeTab(tab.id);
									}}
									className="group-hover:opacity-100 hover:bg-gray-300 rounded p-1 transition-opacity"
								>
									<X className="w-3 h-3" />
								</button>
							</button>
						))}
					</div>

					{/* Editor Area */}
					<div className="flex-1 bg-white overflow-hidden">
						<ProjectDetail project={selectedProject} />
					</div>
				</div>
			</div>

			{/* Status Bar */}
			<div className="bg-blue-600 text-white px-4 py-1 text-xs flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<span>Work Explorer</span>
					{selectedProject && <span>• {selectedProject.label}</span>}
				</div>
				<div className="flex items-center space-x-4">
					<span>Projects: {openTabs.length}</span>
					<span>UTF-8</span>
				</div>
			</div>
		</div>
	);
};

export default WorkSection;
