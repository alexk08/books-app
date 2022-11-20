import { mockBooks } from "../data/mockBooks";
import { Card } from "./Card";

export function Cards() {
  return (
    <ul className="w-full grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {mockBooks.items.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.volumeInfo?.title ?? ""}
            imgUrl={item.volumeInfo?.imageLinks?.thumbnail ?? ""}
            category={item.volumeInfo?.categories?.[0] ?? ""}
            authors={item.volumeInfo?.authors}
          />
        );
      })}
    </ul>
  );
}

type Props = {
  cards: any;
};
