import { createFileRoute } from "@tanstack/react-router";
import { IntroductionSection } from "~/components/introduction";
import { WorkHistorySection } from "~/components/work-history";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-4 lg:space-y-8 flex flex-col">
      <IntroductionSection />
      <WorkHistorySection />
    </div>
  );
}
