import { SelectOption } from "../types";

export function Select(props: Props) {
  const { onChange, value, options } = props;
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-neutral-content">Categories</span>
      </label>
      <select className="select select-bordered w-full" onChange={onChange} value={value}>
        {options.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: Array<SelectOption>;
};
