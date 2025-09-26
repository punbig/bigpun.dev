import { personalInfo } from "~/utils/info";

export function IntroductionSection() {
  return (
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
  );
}
