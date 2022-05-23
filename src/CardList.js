import React from 'react';
import Card from './Card';

const CardList = ({ robots}) => robots.map((robot, i) => <Card key={i} {...robot}/>)

export default CardList;
