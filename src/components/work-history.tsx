import { type WorkHistory, workHistory } from "~/utils/info";

export function WorkHistorySection() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        work history
      </h2>
      <div className="space-y-4">
        {workHistory.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    </div>
  );
}

function HistoryItem({ history }: { history: WorkHistory }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-foreground">
            {history.title}
          </h3>
          <p className="text-primary font-medium lg:text-lg xl:text-xl">
            {history.company}
          </p>
        </div>
        <p className="text-sm lg:text-base xl:text-lg text-muted-foreground font-medium">
          {history.period}
        </p>
      </div>
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
