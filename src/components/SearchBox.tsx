import * as React from 'react';

interface ISearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const SearchBox = ({ searchTerm, onChange }:ISearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        aria-label='search robots'
        type='search'
        placeholder='search robots'
        className="pa3 ba bg-lightest-blue b--green"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBox;
