import { ExternalLink } from "lucide-react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

type Article = {
	title?: string;
	link?: string;
	category: string | null;
	publishDate?: string;
	categories?: string[];
	content?: string;
	thumbnail: string | null;
	colorScheme: string;
	excerpt: string;
	readingTime: string;
};


type BlogContainerProps = {
	articles: Article[];
};

const BlogContainer = ({ articles }: BlogContainerProps) => {
	return (
		<ParallaxProvider>
			<div className="relative h-[600px] md:h-[600px] sm:h-[650px] max-sm:h-[700px] overflow-hidden mx-auto">
				<div className="flex gap-8 md:gap-8 sm:gap-4 items-start absolute left-0 top-0 h-full transition-transform duration-100 ease-out">
					{articles.map((article) => {
						return (
							<Parallax
								key={article.title}
								translateX={[-400, 130]}
								className="flex-none w-[350px] h-[550px] bg-white rounded-2xl overflow-hidden shadow"
							>
								<div className="flex-none w-[350px] md:w-[350px] sm:w-[280px] max-sm:w-[260px] h-[550px] md:h-[550px] sm:h-[600px] max-sm:h-[650px] flex flex-col group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100 hover:border-gray-300 transition-all duration-300">
									{/* Article Image */}
									<div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
										<div
											className={`absolute inset-0 bg-gradient-to-br ${article.colorScheme}`}
										>
											{article.thumbnail && (
												<img
													src={article.thumbnail}
													alt={article.title}
													className="w-full h-full object-cover"
												/>
											)}
										</div>
										<div className="absolute bottom-4 left-4">
											<span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm rounded-full font-medium">
												{article.category}
											</span>
										</div>
									</div>

									{/* Article Content */}
									<div className="p-6 flex-1 flex flex-col">
										{/* Meta Info */}
										<div className="flex items-center text-sm text-gray-500 mb-3">
											<time dateTime={article.publishDate}>
												{article.publishDate}
											</time>
											<span className="mx-2">•</span>
											<span>{article.readingTime}</span>
										</div>

										{/* Title */}
										<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200 line-clamp-2">
											{article.title}
										</h3>

										{/* Excerpt */}
										<p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
											{article.excerpt}
										</p>

										{/* Read More Link */}
										<a
											href={article.link}
											target="_blank"
											className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
										>
											Read on Medium
											<ExternalLink />
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											></path>
										</a>
									</div>
								</div>
							</Parallax>
						);
					})}
				</div>
			</div>
		</ParallaxProvider>
	);
};

export default BlogContainer;
