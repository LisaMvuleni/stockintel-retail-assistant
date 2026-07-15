import {
  Dropdown,
} from "./FilterDropdown.style";

interface FilterDropdownProps {
  label: string;
}

function FilterDropdown({
  label,
}: FilterDropdownProps) {
  return (
    <Dropdown defaultValue="">
      <option value="" disabled>
        {label}
      </option>

      <option value="All">All</option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
    </Dropdown>
  );
}

export default FilterDropdown;