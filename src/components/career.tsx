import { type CareerItem, career } from "~/utils/info";
import { SectionTitle } from "./typography";

export function CareerSection() {
  return (
    <div className="space-y-3">
      <SectionTitle>career</SectionTitle>
      <div className="space-y-4">
        {career.map((history) => (
          <CareerItem key={history.id} history={history} />
        ))}
      </div>
    </div>
  );
}

function CareerItem({ history }: { history: CareerItem }) {
  return (
    <>
      <h2 className="text-primary font-medium lg:text-lg xl:text-xl">
        {history.company} | {history.period}
      </h2>
      <ul className="text-sm lg:text-base xl:text-lg text-muted-foreground">
        {history.responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
