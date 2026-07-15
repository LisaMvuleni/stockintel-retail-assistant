import SearchBar from "../../ui/SearchBar/SearchBar.tsx";
import FilterDropdown from "../../ui/FilterDropdown/FilterDropdown.tsx";
import Button from "../../ui/Button/Button";

import {
  FiltersContainer,
  LeftSection,
  RightSection,
} from "./ProductFilters.style";

function ProductFilters() {
  return (
    <FiltersContainer>

      <LeftSection>

        <SearchBar
          placeholder="Search products..."
        />

        <FilterDropdown
          label="Category"
        />    

        <FilterDropdown
          label="Status"
        />

      </LeftSection>

      <RightSection>

        <Button>
          + Add Product
        </Button>

      </RightSection>

    </FiltersContainer>
  );
}

export default ProductFilters;