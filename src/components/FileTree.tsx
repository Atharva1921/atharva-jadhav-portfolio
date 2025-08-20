import { useState } from "react";
import type { ExperienceData, ExperienceNode } from "./ExperienceSection";
import { ChevronRight, ChevronDown, FileText, Folder } from "lucide-react";

type FileTreeProps = {
	data: ExperienceData[];
	selectedProject: ExperienceNode | null;
	setSelectedProject: (project: ExperienceNode | null) => void;
};

const FileTree = ({
	data,
	selectedProject,
	setSelectedProject,
}: FileTreeProps) => {
	const [expandedFolders, setExpandedFolders] = useState(() =>
		data.map((item) => item.id),
	);

	const toggleFolder = (folderId: string) => {
		setExpandedFolders((prev) =>
			prev.includes(folderId)
				? prev.filter((id) => id !== folderId)
				: [...prev, folderId],
		);
	};

	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
			{data.map(
				(item) =>
					item.type === "folder" && (
						<div className="select-none w-full" key={item.id}>
							<button
								className="flex items-center py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md transition-colors duration-200 w-full"
								onClick={() => toggleFolder(item.id)}
								type="button"
							>
								{expandedFolders.includes(item.id) ? (
									<ChevronDown className="w-4 h-4 mr-2 text-gray-600" />
								) : (
									<ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
								)}
								<Folder className="w-4 h-4 mr-2 text-primary" />
								<span className="text-primary font-medium">{item.label}</span>
							</button>
							{expandedFolders.includes(item.id) &&
								item.children?.map((child) => (
									<div
										key={child.id}
										className="ml-4 border-l border-gray-200 pl-2 "
									>
										<button
											className={`flex items-center justify-start py-2 px-2 hover:bg-gray-100 cursor-pointer rounded-md transition-colors duration-200 w-full ${
												selectedProject?.id === child.id &&
												"bg-primary/30 border-l-2 border-primary hover:bg-primary/30"
											}`}
											onClick={() => setSelectedProject(child)}
											type="button"
										>
											<FileText className="min-w-4 min-h-4 size-4 mr-2 text-gray-500 " />
											<span className="text-gray-700 truncate ">
												{child.label}
											</span>
										</button>
									</div>
								))}
						</div>
					),
			)}
		</div>
	);
};

export default FileTree;
