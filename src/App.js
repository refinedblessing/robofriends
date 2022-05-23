import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [robotList, setRobotList] = useState([]);
  const [allRobots, setAllRobots] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const robots = await res.json();
      setAllRobots(robots);
      setRobotList(robots);
    })();
  })

  useEffect(() => {
    if (searchTerm.length) {
      const matchingRobots = allRobots.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
      // This isn't working
      setRobotList(matchingRobots);
      console.log(robotList.length, matchingRobots.length)
    } else {
      setRobotList(allRobots);
    }
  }, [searchTerm])

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardList robots={robotList}/>
    </div>
  )
}

export default App;
