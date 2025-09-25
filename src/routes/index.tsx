import { createFileRoute } from "@tanstack/react-router";
import { experiences, personalInfo } from "../utils/info";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-background to-muted">
      <section className="container mx-auto px-4 pt-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-left">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {personalInfo.title}{" "}
              <a
                className="text-violet-500"
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener"
              >
                {personalInfo.company}
              </a>{" "}
              {personalInfo.description}
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">experience</h2>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {experience.period}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
