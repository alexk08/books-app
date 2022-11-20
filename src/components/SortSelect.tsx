import sortItems from "../data/sort-items.json";

export function SortSelect() {
  return (
    <div className="form-control w-full ml-2">
      <label className="label">
        <span className="label-text text-neutral-content">Sorting by</span>
      </label>
      <select className="select select-bordered w-full" defaultValue={sortItems[0].value}>
        {sortItems.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
