// Import necessary dependencies
import React from "react";

// Define the SearchBar component
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by description"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
// Export the SearchBar component
export default SearchBar;
