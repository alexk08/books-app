import { Cards } from "./components/Cards";
import { CategoriesFilter } from "./components/CategoriesFilter";
import { SearchBar } from "./components/SearchBar";
import { SortSelect } from "./components/SortSelect";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
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
            <div className="flex mb-5">
              <CategoriesFilter />
              <SortSelect />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto p-4 md:p-8 bg-base-300">
        <div className="mx-auto max-w-7xl">
          <Cards />
        </div>
      </div>
    </div>
  );
}
