import type { FileRouteTypes } from "../routeTree.gen";

interface NavigationItem {
	to: FileRouteTypes["to"];
	label: string;
}

export const nav: NavigationItem[] = [
	{ to: "/", label: "home" },
	{ to: "/blog", label: "blog" },
] as const;
