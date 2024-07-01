import logo from './logo.svg';
import './styles/App.css';
import Record_Graph from './components/Record_Graph';
import Record_List from './components/Record_List';

function App() {

  return (
    <div className="App container mt-3 ">
      
      <div className="row justify-content-around">

        <div className="col-md-12  mb-3" >

          <Record_Graph />
        </div>
        <hr></hr>
        <div className="col-md-12" >
          <Record_List />
        </div>

      </div>
      
    </div>
  );
}

export default App;
