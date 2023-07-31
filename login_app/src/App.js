import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from './Create';
import Login from './Login';
import Restore from './Restore';
import User from './User'
import Responder from './Responder';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Login></Login>}/>
        <Route path="User" element={<User></User>}/>
        <Route path="Restore" element={<Restore></Restore>}/>
        <Route path="Create" element={<Create></Create>}/>
        <Route path="Responder" element={<Responder></Responder>}/>

      </Routes>
      
    </div>
  );
}

export default App;
