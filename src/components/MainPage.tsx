import * as React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import CounterButton from './CounterButton';

const { useEffect } = React;

const filteredRobots = (robots, searchTerm) => robots.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
const MainPage = ({ onSearchChange, searchTerm, robots, onRequestRobots, isPending }) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])

  return (
    <div className='tc'>
      <CounterButton color={'blue'}/>
      <h1>RoboFriends</h1>
      <SearchBox searchTerm={searchTerm} onChange={onSearchChange}/>
      {filteredRobots.length ? 
        <Scroll>
          <CardList robots={filteredRobots(robots, searchTerm)}/>
        </Scroll> : <h2>NO Robots</h2>}
    </div>
  )
}

export default MainPage;
