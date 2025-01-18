import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function HeroSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="hero__search p__relative">
      <input
        type="text"
        className="show__search max__w"
        placeholder="Search for a movie, tv show..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <CiSearch className="p__absolute" />

      {searchInput || isFocused ? (
        <div className="hero__search__results p__absolute max__w">
          {searchInput ? "" : "No Results..."}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HeroSearch;
