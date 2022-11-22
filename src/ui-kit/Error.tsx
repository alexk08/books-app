import { XCircleIcon } from "@heroicons/react/24/outline";

export function Error({ text }: { text?: string }) {
  return (
    <div className="alert alert-error shadow-lg">
      <div>
        <XCircleIcon className="stroke-current flex-shrink-0 h-6 w-6" />
        <span>{text || "Error! Couldn't fetch data. Try again."}</span>
      </div>
    </div>
  );
}
