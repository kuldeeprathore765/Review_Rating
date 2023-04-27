
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from "./components/user/usersignup";
import LoginUser from "./components/user/UserSignin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element={<AddUser/>}/>
            <Route path = "/" element={<LoginUser/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
