import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    // fetch a list of robots
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const robots = await res.json();
      setRobots(robots);
    })();
  }, [])

  const filteredRobots = robots.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredRobots.length)
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {filteredRobots.length ? 
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll> : <h2>NO Robots</h2>}
    </div>
  )
}

export default App;
