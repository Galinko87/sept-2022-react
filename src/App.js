import React, {useEffect, useState} from "react";


function App() {
  const [launches, setLaunches] = useState([])
  useEffect(()=> {
    fetch('https://api.spacexdata.com/v3/launches/').then(response=>response.json()).then(resp=> setLaunches(resp))
  }, [])
  return (
    <div>
      {launches.filter(launch=> launch.launch_year !== '2020').map(launch=>{
        return(
            <div key={launch.flight_number} >{launch.flight_number} --- {launch.launch_year} --- {launch.mission_name} </div>
        )
      })}
    </div>
  );
}

export default App;
