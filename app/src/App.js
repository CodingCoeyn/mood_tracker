import logo from './logo.svg';
import './App.css';
import Record_Graph from './components/Record_Graph';
import Record_List from './components/Record_List';
import Record_Modal from './components/Record_Modal';

function App() {
  return (
    <div className="App container mt-4">
      
      <div className="row">

        <div className="col-md-6 border-black border-2 border" >

          <Record_Graph />
        </div>
        
        <div className="col-md-6 border" >

          {/* <Record_Input /> */}
          <Record_List />
        </div>

      </div>

      <Record_Modal />
      
    </div>
  );
}

export default App;
