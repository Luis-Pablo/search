
import './App.css';
import Search from './prueba';
import Feeds from './feeds';

function App() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col w-25"><Search/></div>
      
        <div className="col w-75"><Feeds /></div>
      </div>

    </div>
  );
}

export default App;
