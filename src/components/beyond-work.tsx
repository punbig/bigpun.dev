import { personalInfo } from "~/utils/info";
import { SectionParagraph, SectionTitle } from "./typography";

export function BeyondWorkSection() {
  return (
    <div className="space-y-3">
      <SectionTitle>beyond work</SectionTitle>
      <SectionParagraph>
        love my fam, dog, eating, sourdough & making pizza. casual herb
        gardening. i also like keeping up to date so i made this website to try
        tanstack start.
      </SectionParagraph>
      <SectionParagraph>
        if you have any more questions my ai-clone will try to answer.
      </SectionParagraph>
      <SectionParagraph>
        feel free to reach out:{" "}
        <a href={`mailto:${personalInfo.mail}`} target="_blank">
          {personalInfo.mail}
        </a>
      </SectionParagraph>
    </div>
  );
}
