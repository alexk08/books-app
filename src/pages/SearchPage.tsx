import { Books, CategoriesFilter, SearchBar, SortSelect } from "../components";

export default function SearchPage() {
  return (
    <div className="h-screen max-h-screen flex flex-col">
      <div className="hero bg-hero-pattern">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center w-full min-w-fit">
          <div className="max-w-lg w-full">
            <div className="mb-5">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold text-neutral-content">
                Search for books
              </h1>
              <SearchBar />
            </div>
            <div className="flex mb-5 gap-2">
              <CategoriesFilter />
              <SortSelect />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto p-4 md:p-8 h-full">
        <div className="mx-auto max-w-7xl">
          <Books />
        </div>
      </div>
    </div>
  );
}
