import './App.css';
import {create360Image} from './components/Image360'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

function App() {
  return (
    <div className="App">
      <Cursor isGelly={true} />
      <div data-cursor-exclusion style={{backgroundColor: '#fff'}} data-cursor-size="80px">
        <img src='https://reactjs.org/logo-og.png' width={1700}/>
      </div>
    </div>
  );
}

export default App;
