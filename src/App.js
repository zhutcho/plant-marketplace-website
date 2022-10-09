import { useState, useRef, useEffect } from "react";
import PlantList from "./PlantList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "plantMarketplace.plants";

function App() {
  const [plants, setPlants] = useState([]);
  const plantNameRef = useRef();

  // On start, set the list of plants to what is in local storage
  useEffect(() => {
    const storedPlants = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPlants) setPlants(storedPlants);
  }, []);

  // Every time the list of plants changes, update the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  function buyPlant(id) {
    const newPlants = [...plants];
    const plant = newPlants.find((plant) => plant.id === id);
    plant.sold = !plant.sold;
    setPlants(newPlants);
  }

  // Add a plant to the list, and set the input to null
  function handleAddPlant(e) {
    const name = plantNameRef.current.value;
    if (name === "") return;
    setPlants((prevPlants) => {
      return [...prevPlants, { id: uuidv4(), name: name, sold: false }];
    });
    plantNameRef.current.value = null;
  }

  function handleClearPlants() {
    const newPlants = plants.filter(plant => !plant.sold);
    setPlants(newPlants);
  }

  return (
    <>
      <PlantList plants={plants} buyPlant={buyPlant} />
      <input ref={plantNameRef} type="text" />
      <button onClick={handleAddPlant}>Add Plant</button>
      <button onClick={handleClearPlants}>Clear Plant List</button>
      <div>{plants.filter(plant => !plant.sold).length} plant/s for sale</div>
    </>
  );
}

export default App;
