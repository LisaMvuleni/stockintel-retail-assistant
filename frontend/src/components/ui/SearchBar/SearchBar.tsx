import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

import {
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "./SearchBar.style";

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <SearchContainer>

      <SearchIcon>
        <FiSearch />
      </SearchIcon>

      <SearchInput
        type="text"
        placeholder={placeholder}
      />

    </SearchContainer>
  );
}

export default SearchBar;