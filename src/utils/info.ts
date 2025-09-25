export interface Experience {
	id: string;
	title: string;
	company: string;
	period: string;
	responsibilities: string[];
}

export const experiences: Experience[] = [
	{
		id: "appstream-studio",
		title: "founding senior full stack engineer",
		company: "appstream studio",
		period: "may 2023 – present",
		responsibilities: [
			"lead full-stack development of web and mobile applications using react, typescript, and modern frameworks",
			"architect high-performance, scalable systems with robust ci/cd pipelines and cloud infrastructure",
			"develop generative ai tools, conversational agents, and semantic search engines",
			"mentor junior developers and establish engineering best practices",
		],
	},
	{
		id: "jet-ventures",
		title: "senior software engineer",
		company: "jet ventures llc",
		period: "oct 2022 – present",
		responsibilities: [
			"maintain and enhance novo2, a web-based enterprise scheduling application",
			"built automation tools for importing files into database using python",
			"technologies: angular, node.js, mysql, aws",
		],
	},
	{
		id: "tekton-labs",
		title: "software engineer",
		company: "tekton labs",
		period: "dec 2021 – oct 2022",
		responsibilities: [
			"built internal hr management web applications using react and nest.js",
			"implemented data encryption using aws kms for sensitive information",
			"collaborated with cross-functional teams to deliver scalable solutions",
		],
	},
	{
		id: "capitalis",
		title: "senior full stack developer",
		company: "capitalis",
		period: "may 2021 – dec 2021",
		responsibilities: [
			"engineered backend with node.js (typescript), graphql, and typeorm",
			"developed frontend with react (typescript) and urql",
			"integrated aws services and third-party platforms like sendgrid",
			"optimized application performance and implemented best practices",
		],
	},
];

export const personalInfo = {
	name: "cesar bustamante",
	title: "founding software engineer",
	company: "@AppStreamStudio",
	companyUrl: "https://appstream.studio/",
	description: "building things on the web. love react & typescript.",
};
