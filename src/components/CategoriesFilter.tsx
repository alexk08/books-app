import categories from "../data/categories.json";
import { observer } from "mobx-react-lite";
import { formStore } from "../store/formStore";
import { Select } from "../ui-kit";

export const CategoriesFilter = observer(() => (
  <Select
    onChange={(e) => formStore.setCategory(e.target.value)}
    value={formStore.category}
    options={categories}
  />
));
