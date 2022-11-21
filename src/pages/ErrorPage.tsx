import { Error } from "../ui-kit";

export function ErrorPage() {
  return (
    <div className="p-10">
      <Error text="Oops! Something went wrong, page not found..." />
    </div>
  );
}
