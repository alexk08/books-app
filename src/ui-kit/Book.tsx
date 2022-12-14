import { Link } from "react-router-dom";

export function Book({ title, imgUrl, category, authors, id }: Props) {
  return (
    <Link
      to={`book/${id}`}
      className="card card-compact w-72 bg-base-100 shadow-xl justify-self-center transition ease-in-out delay-100 hover:scale-105 duration-200"
    >
      <figure className="px-4 pt-4">
        <img src={imgUrl} alt={title} className="h-56 object-scale-down" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="font-semibold">{category}</p>
        <h2 className="card-title line-clamp-4">{title}</h2>
        <ul>
          {authors?.slice(0, 3)?.map((author, idx) => (
            <li key={idx}>{author}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

type Props = {
  title: string;
  imgUrl: string;
  category: string;
  authors: Array<string>;
  id: string;
};
