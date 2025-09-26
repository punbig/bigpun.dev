import { createFileRoute } from "@tanstack/react-router";
import { IntroductionSection } from "~/components/introduction";
import { WorkHistorySection } from "~/components/work-history";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <IntroductionSection />
      <WorkHistorySection />
    </>
  );
}
