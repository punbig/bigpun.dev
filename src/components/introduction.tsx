import { personalInfo } from "~/utils/info";

export function IntroductionSection() {
  const yearsOfExperience =
    new Date().getFullYear() - personalInfo.workStartDate.getFullYear();

  return (
    <div className="text-left space-y-2">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        {personalInfo.name}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base lg:text-lg xl:text-xl">
        I've been around for {yearsOfExperience}+ years. currently working as{" "}
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
