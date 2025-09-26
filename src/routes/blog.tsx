import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  return (
    <p>
      i created this page mainly because i wanted to have a personal web but
      also to try tanstack router. i might post in the future.
    </p>
  );
}
