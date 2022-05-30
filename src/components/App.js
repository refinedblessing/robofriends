import React from 'react';
import { connect } from 'react-redux';

import { requestRobots, setSearchTerm } from '../actions';
import MainPage from './MainPage';

const mapStateToProps = state => {
  return {
    searchTerm: state.searchRobots.searchTerm,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchTerm(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

const App = ({ onSearchChange, searchTerm, robots, onRequestRobots, isPending }) => {
  return (
    <MainPage
      onSearchChange={onSearchChange}
      searchTerm={searchTerm}
      robots={robots}
      onRequestRobots={onRequestRobots}
      isPending={isPending}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
