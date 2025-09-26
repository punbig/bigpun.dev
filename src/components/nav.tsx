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
          className="items-center hidden md:flex"
        >
          <img
            src="/rocky.png"
            alt="pug"
            className="size-8 md:size-10 object-contain"
          />
        </Link>

        <div className="flex w-full md:w-auto items-center gap-4 md:gap-8">
          <div className="flex w-full md:w-auto gap-4 md:gap-8 font-body text-sm md:text-base lg:text-lg xl:text-xl">
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
            <ExternalNavItem href="https://github.com/punbig" title="GitHub">
              github
            </ExternalNavItem>
            <ExternalNavItem href="/llms.txt" title="llms.txt">
              llms.txt
            </ExternalNavItem>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

function ExternalNavItem({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-primary transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}
