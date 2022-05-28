import React from 'react';

// const mapDispatchToProps = (dispatch) => {
//   onSearchChange: (e) => {
//     e.preventDefault();
//     setSearchTerm(e.target.value);
//   }
// }

// const mapStateToProps = state => {
//   return {
//     value: state.searchRobots.searchTerm
//   }
// }

const SearchBox = ({ searchTerm, onChange }) => {
  // const onSearchChange = (e) => {
  //   e.preventDefault();
  //   setSearchTerm(e.target.value);
  // }
  return (
    <div className="pa2">
      <input
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
