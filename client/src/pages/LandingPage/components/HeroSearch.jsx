import React from "react";
import { CiSearch } from "react-icons/ci";

function HeroSearch() {
  return (
    <div className="hero__search p__relative">
      <input
        type="text"
        className="show__search max__w"
        placeholder="Search for a movie, tv show..."
      />
      <CiSearch className="p__absolute" />
    </div>
  );
}

export default HeroSearch;
