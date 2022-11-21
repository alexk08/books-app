import sortItems from "../data/sort-items.json";
import { observer } from "mobx-react-lite";
import { formStore } from "../store/formStore";
import { Select } from "../ui-kit";

export const SortSelect = observer(() => (
  <Select
    onChange={(e) => formStore.setOrderedBy(e.target.value)}
    value={formStore.orderedBy}
    options={sortItems}
  />
));
