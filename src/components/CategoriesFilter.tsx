import categories from "../data/categories.json";

export function CategoriesFilter() {
  return (
    <div className="form-control w-full mr-2">
      <label className="label">
        <span className="label-text text-neutral-content">Categories</span>
      </label>
      <select className="select select-bordered w-full" defaultValue={categories[0].value}>
        {categories.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
