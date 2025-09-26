import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">404</h1>
        <div className="text-muted-foreground">
          {children || (
            <p className="text-lg md:text-xl">
              the page you are looking for does not exist.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
        >
          go back
        </button>
        <Link
          to="/"
          className="bg-secondary text-secondary-foreground px-6 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
        >
          start over
        </Link>
      </div>
    </div>
  );
}
