import * as React from 'react';

interface CardStatelessProps {
  name: string;
  username: string;
  email: string;
}

const Card: React.FunctionComponent<CardStatelessProps> = ({name, email, username}):JSX.Element => {
  return (
    <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc'>
      <img src={`https://robohash.org/${username}/size=300x300`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
