import { personalInfo } from "~/utils/info";
import { SectionParagraph, SectionTitle } from "./typography";

export function IntroductionSection() {
  const yearsOfExperience =
    new Date().getFullYear() - personalInfo.workStartDate.getFullYear();

  return (
    <div className="text-left space-y-2">
      <SectionTitle>{personalInfo.name}</SectionTitle>
      <SectionParagraph>
        i've been around for {yearsOfExperience}+ years. {personalInfo.title}{" "}
        <a
          className="text-violet-500"
          href={personalInfo.companyUrl}
          target="_blank"
          rel="noopener"
        >
          {personalInfo.company}
        </a>
        {". "}
        {personalInfo.description}
      </SectionParagraph>
    </div>
  );
}
