import { Card } from "./Card";
import { observer } from "mobx-react-lite";
import { booksStore } from "../store/booksStore";
import { formStore } from "../store/formStore";
import { Error, Loader } from "../ui-kit";

export const Cards = observer(() => {
  const { state, books, startIndex, totalCount } = booksStore;
  const { searchTerm, category, orderedBy } = formStore;

  const loading = state === "pending" && !books.length;
  const loadingMore = state === "pending" && !!books.length;

  function loadMore() {
    booksStore.fetchMoreBooks({
      searchTerm,
      category,
      orderedBy,
      startIndex,
    });
  }

  if (state === "initial") {
    return <div className="text-center">Let's try to find smth!</div>;
  }

  if (state)
    if (loading) {
      return <Loader size="w-10 h-10" color="text-neutral" />;
    }

  if (state === "error") {
    return <Error />;
  }

  return books.length ? (
    <div>
      <ul className="w-full grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => {
          return (
            <Card
              key={book.id}
              title={book.volumeInfo?.title ?? ""}
              imgUrl={book.volumeInfo?.imageLinks?.thumbnail ?? ""}
              category={book.volumeInfo?.categories?.[0] ?? ""}
              authors={book.volumeInfo?.authors}
            />
          );
        })}
      </ul>
      {(totalCount || 0) > startIndex ? (
        <div className="flex mt-5 justify-center">
          <button className="btn btn-primary w-40" onClick={loadMore}>
            {loadingMore ? <Loader /> : "load more"}
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <div className="text-center">Nothing found. Try again, plz.</div>
  );
});
