import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import { requestRobots, setSearchTerm } from '../actions';

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
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])
  const filteredRobots = robots.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchTerm={searchTerm} onChange={onSearchChange}/>
      {filteredRobots.length ? 
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll> : <h2>NO Robots</h2>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
