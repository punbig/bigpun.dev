import { useTheme } from "~/components/theme-provider";

export function ModeToggle() {
  const { setTheme, userTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(userTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className="celestial-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="celestial-shape">
        <div className="sun-circle" />
        <div className="moon-crescent" />
      </div>
    </button>
  );
}
