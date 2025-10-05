import { useState } from "react";
import { ChevronDown, ChevronRight, Folders, File } from "lucide-react";
import type { ExperienceData, ExperienceNode } from "@/types/types";

export const FileTree = ({
	data,
	setSelectedProject,
	selectedProject,
}: {
	data: ExperienceData[];
	setSelectedProject: (project: ExperienceNode) => void;
	selectedProject: ExperienceNode | null;
}) => {
	const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
		new Set(["2023-present"]),
	);

	const toggleFolder = (folderId: string) => {
		const newExpanded = new Set(expandedFolders);
		if (newExpanded.has(folderId)) {
			newExpanded.delete(folderId);
		} else {
			newExpanded.add(folderId);
		}
		setExpandedFolders(newExpanded);
	};

	return (
		<div className="text-sm">
			{data.map((folder) => (
				<div key={folder.id}>
					<button
						type="button"
						className="flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer rounded"
						onClick={() => toggleFolder(folder.id)}
					>
						{expandedFolders.has(folder.id) ? (
							<ChevronDown className="w-4 h-4 mr-1 text-gray-600" />
						) : (
							<ChevronRight className="w-4 h-4 mr-1 text-gray-600" />
						)}
						<Folders className="w-4 h-4 mr-2 text-blue-600" />
						<span className="text-gray-800">{folder.label}</span>
					</button>

					{expandedFolders.has(folder.id) && folder.children && (
						<div className="ml-6">
							{folder.children.map((file) => (
								<button
									type="button"
									key={file.id}
									className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer rounded ${
										selectedProject?.id === file.id ? "bg-blue-100" : ""
									}`}
									onClick={() => setSelectedProject(file)}
								>
									<File className="w-4 h-4 mr-2 text-gray-600" />
									<span
										className={`text-gray-800 ${
											selectedProject?.id === file.id ? "font-medium" : ""
										}`}
									>
										{file.label}
									</span>
								</button>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
