import React, {useState} from "react";
import {ClassComponent} from "./components/ClassComponent";


function App() {
    const [flag, setFlag] = useState(true);
  return (
    <div>
        { flag && <ClassComponent name={'max'}/>}
        <button onClick={()=>setFlag(prev=> !prev)}>flagButton</button>
    </div>
  );
}

export default App;
