import { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import PlantList from "./PlantList";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
    const newPlants = plants.filter((plant) => !plant.sold);
    setPlants(newPlants);
  }

  return (
    <>
      <NavBar />
      <PlantList plants={plants} buyPlant={buyPlant} />
      <TextField
        inputRef={plantNameRef}
        label="Name of Plant"
        variant="standard"
      />
      <Button onClick={handleAddPlant}>Add Plant</Button>
      <Button onClick={handleClearPlants}>Clear Plant List</Button>
      <Typography variant="subtitle1">
        {plants.filter((plant) => !plant.sold).length} plant/s for sale
      </Typography>
    </>
  );
}

export default App;
