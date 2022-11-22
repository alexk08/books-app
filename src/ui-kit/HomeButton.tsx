import { Link } from "react-router-dom";

export function HomeButton() {
  return (
    <Link to="/" className="btn btn-primary mt-10">
      back home
    </Link>
  );
}
