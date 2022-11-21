import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import * as React from "react";
import useDebounce from "../hooks/useDebounce";
import { formStore } from "../store/formStore";

export const SearchBar = observer(() => {
  const [value, setValue] = React.useState<string>(formStore.searchTerm);
  const debouncedValue = useDebounce<string>(value, 500);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  React.useEffect(() => {
    formStore.setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="form-control relative">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered w-full pl-10"
        onChange={handleChange}
        value={value}
      />
      <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content" />
    </div>
  );
});
