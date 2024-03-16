import { useState } from 'react';
import './App.css';
import Items from './components/Items';
import data from './data';

function App() {
  const [stateData, setStateData] = useState(data);
  function removeCard(id){
      const newdata = stateData.filter(tour => tour.id !== id);
      setStateData(newdata);
  }

  function resetBtn(){
    setStateData(data);
  }

  if(stateData.length === 0){
    return (
      <div className="wrapper-2">
        <div className='box'>
          <h2>No Tours Left</h2>
          <button onClick={resetBtn}>Refresh</button>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <h1>Plan With Love</h1>
      <Items stateData={stateData} removeCard={removeCard}></Items>
    </div>
  );
}

export default App;
