import { useEffect } from 'react';
import './App.css';
import {create360Image} from './components/Image360'

function App() {
  useEffect(() => {
    create360Image()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
