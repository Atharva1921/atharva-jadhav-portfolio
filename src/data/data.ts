import type { ExperienceData } from "@/types/types";

export const experienceData: ExperienceData[] = [
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
