import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScrollArticles = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		thumbnail?: string;
		link?: string;
		category?: string;
		publishDate?: string;
		readingTime?: string;
		colorScheme?: string;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0,
		);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<div
			className="relative flex w-full justify-center gap-10 p-6 md:p-10"
			ref={ref}
		>
			<div className="relative flex flex-col lg:flex-row items-start gap-10 w-full max-w-7xl">
				<div className="w-full lg:w-1/2">
					{content.map((item, index) => (
						<div key={item.title} className="my-20 first:mt-0 last:mb-0">
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
							>
								{item.title}
							</motion.h2>
							<motion.div
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="space-y-4"
							>
								<p className="text-base md:text-lg text-gray-700 leading-relaxed">
									{item.description}
								</p>
								{item.category && item.publishDate && item.readingTime && (
									<div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
										<span className="px-3 py-1 bg-gray-200 rounded-full">
											{item.category}
										</span>
										<span>{item.publishDate}</span>
										<span>•</span>
										<span>{item.readingTime}</span>
									</div>
								)}
								{item.link && activeCard === index && (
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all duration-300 mt-4"
									>
										<span>Read article</span>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								)}
							</motion.div>
						</div>
					))}
				</div>

				<div
					className={cn(
						"sticky top-20 hidden h-[300px] w-2/3 lg:w-1/2 overflow-hidden rounded-lg lg:block",
						contentClassName,
					)}
				>
					{content[activeCard].thumbnail ? (
						<div className="relative h-full w-4/5">
							<img
								src={content[activeCard].thumbnail}
								className="h-full w-full object-cover rounded-lg"
								alt={content[activeCard].title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
								<div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3">
									{content[activeCard].category}
								</div>
								<div className="flex items-center gap-4 text-sm opacity-90">
									<span>{content[activeCard].publishDate}</span>
									<span>•</span>
									<span>{content[activeCard].readingTime}</span>
								</div>
							</div>
						</div>
					) : (
						<div
							className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${content[activeCard].colorScheme} text-white p-8 rounded-lg`}
						>
							<div className="text-center">
								<div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
									{content[activeCard].category}
								</div>
								<h3 className="text-2xl font-bold mb-4">
									{content[activeCard].title}
								</h3>
								<div className="flex items-center justify-center gap-4 text-sm opacity-90">
									<span>{content[activeCard].publishDate}</span>
									<span>•</span>
									<span>{content[activeCard].readingTime}</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default StickyScrollArticles;