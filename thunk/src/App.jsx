import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchUsers } from './component/action';
import UserData from "./component/data"

import "./App.css"

function App() {
  const dispatch = useDispatch();
  const [isDataFetched, setIsDataFetched] = useState(false);

  let [state1,setState]=useState(false)



  const fetchData = () => {
    dispatch(fetchUsers());
    setState(!state1)
    setIsDataFetched(true);
  };
  

 
  return (
    <div className="App"  >
    
    <button  onClick={fetchData}>Fetch Data</button>
    <h2>Click me👆🏻</h2>
    <UserData value={state1} setState={setState}/>
  
    </div>
  );
}

export default App;