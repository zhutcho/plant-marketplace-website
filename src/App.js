import { useState } from "react";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState(["Cactus", "Aloe"]);
  return (
    <>
      <PlantList plants={plants} />
      <input type="text" />
      <button>Add Plant</button>
      <button>Clear Plant List</button>
      <div>0 total plants</div>
    </>
  );
}

export default App;
