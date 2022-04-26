import { useState } from 'react';
import './App.css';
import NewData from './components/NewData';


function App() {
  const [data,setData] = useState([])
    function saveData(data){
        setData(prevState=>{
            return [...prevState,data]
        })
    }
  return (
    <div className="App">
      {console.log(data)}
      <NewData onSaveData={saveData} datalist={data}/>
    </div>
  );
}

export default App;
