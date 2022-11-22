import { observer } from "mobx-react-lite";
import { booksStore } from "../store/booksStore";
import { formStore } from "../store/formStore";
import { Error, Loader, Book } from "../ui-kit";

export const Books = observer(() => {
  const { state, books, startIndex, totalCount } = booksStore;
  const { searchTerm, category, orderedBy } = formStore;

  const loading = state === "pending" && !books.length;
  const loadingMore = state === "pending" && !!books.length;

  const error = state === "error" && !books.length;
  const errorLoadMore = state === "error" && !!books.length;

  const showLoadMoreButton = totalCount > startIndex;

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

  if (loading) {
    return <Loader size="w-10 h-10" color="text-neutral" />;
  }

  if (error) {
    return <Error />;
  }

  return books.length ? (
    <div>
      <ul className="w-full grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.volumeInfo?.title ?? ""}
              imgUrl={book.volumeInfo?.imageLinks?.thumbnail ?? ""}
              category={book.volumeInfo?.categories?.[0] ?? ""}
              authors={book.volumeInfo?.authors ?? []}
            />
          );
        })}
      </ul>
      {showLoadMoreButton ? (
        <div className="flex my-5 justify-center">
          <button className="btn btn-primary w-40" onClick={loadMore}>
            {loadingMore ? <Loader /> : "load more"}
          </button>
        </div>
      ) : null}
      {errorLoadMore ? <Error /> : null}
    </div>
  ) : (
    <div className="text-center">Nothing found. Try again, plz.</div>
  );
});
