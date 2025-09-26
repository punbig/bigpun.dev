import { Link } from "@tanstack/react-router";
import { nav } from "../utils/site";
import { ModeToggle } from "./mode-toggle";

export function Nav() {
  return (
    <nav className="w-full py-2 md:py-4 px-4 md:px-8">
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
            className="size-8 md:size-10 object-contain"
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex gap-4 md:gap-8 font-body text-sm md:text-base">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-foreground hover:text-primary transition-colors"
                activeProps={{
                  className: "text-primary font-medium",
                }}
              >
                {item.label}
              </Link>
            ))}
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
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
