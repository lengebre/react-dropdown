import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';


const items =[
  {
    id: 1,
    value: 'The Matrix'
  },
  {
    id: 2,
    value: 'Blade Runner 2049'
  },
  {
    id: 3,
    value: 'The Avengers'
  },
  {
    id: 4,
    value: 'Age of Ultron'
  },
]

function App() {
  return (
    <div className="container">
    <Dropdown title="Select Movie" items={items} multiSelect />
      
    </div>
  );
}

export default App;
