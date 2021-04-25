import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Card from './components/Card.jsx'

ReactDOM.render(
  <Card
    title={["Get ", <span className="accent">insights</span>, " that help your business grow."]}
    description="Discover the benefits of data analytics and make better decisions regarding revenue, customer 
    experience, and overall efficiency."
    companies="10k+"
    templates="314" 
    queries="12m+">
  </Card>,
  document.getElementById('root')
);

