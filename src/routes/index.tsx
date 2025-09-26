import { createFileRoute } from "@tanstack/react-router";
import { BeyondWorkSection } from "~/components/beyond-work";
import { IntroductionSection } from "~/components/introduction";
import { CareerSection } from "~/components/career";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-4 lg:space-y-8 flex flex-col">
      <IntroductionSection />
      <CareerSection />
      <BeyondWorkSection />
    </div>
  );
}
