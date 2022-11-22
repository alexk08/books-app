import { Error } from "../ui-kit";
import { HomeButton } from "../ui-kit/HomeButton";

export default function ErrorPage() {
  return (
    <div className="p-10">
      <Error text="Oops! Something went wrong, page not found..." />
      <HomeButton />
    </div>
  );
}
