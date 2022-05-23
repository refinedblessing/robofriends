import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRobots, setRobots] = useState([]);
  const [allRobots, setAllRobots] = useState([]);

  useEffect(() => {
    // fetch a list of robots
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const robots = await res.json();
      setAllRobots(robots);
      setRobots(robots);
    })();
  })

  useEffect(() => {
    if (searchTerm.length) {
      // filter robot list based on search term
      const matchingRobots = allRobots.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
      setRobots(matchingRobots);
    } else {
      setRobots(allRobots);
    }
  }, [searchTerm, allRobots])

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  )
}

export default App;
