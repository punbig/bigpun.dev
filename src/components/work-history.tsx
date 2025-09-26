import { type WorkHistory, workHistory } from "~/utils/info";

export function WorkHistorySection() {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold mb-2">work history</h2>
      <div className="space-y-4 ">
        {workHistory.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    </>
  );
}

function HistoryItem({ history }: { history: WorkHistory }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {history.title}
          </h3>
          <p className="text-primary font-medium">{history.company}</p>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          {history.period}
        </p>
      </div>
      <ul className="space-y-1 text-sm text-muted-foreground">
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
