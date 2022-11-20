import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar() {
  return (
    <div className="form-control">
      <div className="input-group">
        <input type="text" placeholder="Search…" className="input input-bordered w-full" />
        <button className="btn btn-square btn-primary">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
