import * as React from 'react';
import { connect } from 'react-redux';

import MainPage from './MainPage';
import { requestRobots, setSearchTerm } from '../actions';

export interface IRobot {
  name: string;
  username: string;
  id: number;
  email: string;
}

interface IAppProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRequestRobots: () => void;
}

interface IAppState {
  searchTerm: string;
  robots: Array<IRobot>;
  isPending: boolean;
}

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

const App = ({ onSearchChange, searchTerm, robots, onRequestRobots, isPending }: IAppProps & IAppState) => {
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
