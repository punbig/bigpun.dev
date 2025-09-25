import { Link } from "@tanstack/react-router";
export function Nav() {
	return (
		<nav className="w-full py-4 px-4 md:px-8">
			<div className="max-w-4xl mx-auto flex justify-between items-center">
				<Link
					to="/"
					activeProps={{
						className: "text-primary font-medium",
					}}
					className="flex items-center"
				>
					<img
						src="/rocky.png"
						alt="pug"
						className="w-8 h-8 md:w-10 md:h-10 object-contain"
					/>
				</Link>

				<div className="flex items-center gap-4 md:gap-8">
					<div className="flex gap-4 md:gap-8 font-body text-sm md:text-base">
						<Link
							to="/"
							className="text-foreground hover:text-primary transition-colors"
							activeProps={{
								className: "text-primary font-medium",
							}}
						>
							home
						</Link>
						<Link
							to="/users"
							className="text-foreground hover:text-primary transition-colors"
							activeProps={{
								className: "text-primary font-medium",
							}}
						>
							blog
						</Link>
						<a
							href="https://github.com/punbig"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground hover:text-primary transition-colors"
							title="GitHub"
						>
							github
						</a>
						<a
							href="/llms.txt"
							target="_blank"
							className="text-foreground hover:text-primary transition-colors"
							title="LLMs.txt"
							rel="noopener"
						>
							llms.txt
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
