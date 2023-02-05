import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {UsersPage} from "./components/UsersPage";
import {CarPage} from "./components/CarPage";


function App() {
  const navigate = useNavigate()
  return (
    <div>
        <div>
          <button onClick={()=>navigate('/users')}>users</button>
          <button onClick={()=>navigate('/cars')}>cars</button>
        </div>
        <hr/>
        <Routes>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/cars'} element={<CarPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
