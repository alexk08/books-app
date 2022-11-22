import { useLoaderData } from "react-router-dom";
import type { Book } from "../types";
import { HomeButton } from "../ui-kit/HomeButton";

export default function BookPage() {
  const data = useLoaderData() as Book;

  const { volumeInfo } = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={volumeInfo.imageLinks?.thumbnail}
          className="max-w-sm rounded-lg shadow-2xl w-full object-contain flex-shrink-0"
          alt={volumeInfo.title}
        />
        <div>
          <h1 className="text-3xl font-bold">{volumeInfo.title}</h1>
          <ul className="py-2">
            {volumeInfo.categories?.map((category, idx) => (
              <li key={idx} className="font-bold">
                {category}
              </li>
            ))}
          </ul>
          <p
            className="py-6"
            dangerouslySetInnerHTML={{ __html: volumeInfo.description ?? "" }}
          ></p>
          <div>
            <h3 className="text-xl font-bold">Authors:</h3>
            <ul>
              {volumeInfo.authors?.map((author, idx) => (
                <li key={idx} className="font-bold">
                  {author}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <small>published: {volumeInfo.publishedDate}</small>
          </div>
          <HomeButton />
        </div>
      </div>
    </div>
  );
}
