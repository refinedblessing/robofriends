import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleValueChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  return (
    <div className="pa2">
      <input
        type='search'
        placeholder='search robots'
        className="pa3 ba bg-lightest-blue b--green"
        value={searchTerm}
        onChange={handleValueChange}
      />
    </div>
  )
}

export default SearchBox;
