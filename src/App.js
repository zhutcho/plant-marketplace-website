import { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import PlantList from "./PlantList";
import PlantOfTheDay from "./PlantOfTheDay"
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios'

// const LOCAL_STORAGE_KEY = "plantMarketplace.plants";
const api = axios.create({
  baseURL: `https://0mwm2j0fnj.execute-api.us-east-1.amazonaws.com/prod/`
})

function App() {
  const [plants, setPlants] = useState([]);
  const [plant_of_the_day, setPlantOfTheDay] = useState({});
  const plantNameRef = useRef();

  // On start, call the api to get plant of the day, and plants
  useEffect(() => {
    // const storedPlants = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (storedPlants) setPlants(storedPlants);
    api.get('/plants/plant_of_the_day').then(res => {
      setPlantOfTheDay(res.data['plant_item_arr'])
    })

    api.get('/plants/featured').then(res => {
      setPlants(res.data['plant_item_arr']);
    })
  }, []);

  // Every time the list of plants changes, update the local storage
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  function showAllPlants() {
    api.get('/plants').then(res => {
      setPlants(res.data['plant_item_arr']);
    })
  }

  function buyPlant(id) {
    // const newPlants = [...plants];
    // const plant = newPlants.find((plant) => plant.id === id);
    // plant.sold = !plant.sold;
    // setPlants(newPlants);
  }

  // Add a plant to the list, and set the input to null
  function handleAddPlant(e) {
    // const name = plantNameRef.current.value;
    // if (name === "") return;
    // setPlants((prevPlants) => {
    //   return [...prevPlants, { id: uuidv4(), name: name, sold: false }];
    // });
    // plantNameRef.current.value = null;
  }

  function handleClearPlants() {
    // const newPlants = plants.filter((plant) => !plant.sold);
    // setPlants(newPlants);
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <PlantOfTheDay plant_of_the_day={plant_of_the_day} />
        <PlantList plants={plants} buyPlant={buyPlant} />
        <Button variant="contained" onClick={showAllPlants}>
          Show All Plants
        </Button>
        <TextField
          inputRef={plantNameRef}
          label="Name of Plant"
          variant="standard"
        />
        <Button variant="contained" onClick={handleAddPlant}>
          Add Plant
        </Button>
        <Button variant="contained" onClick={handleClearPlants}>
          Clear Plant List
        </Button>
        <Typography variant="subtitle1">
          {/* {plants.filter((plant) => !plant.sold).length} plant/s for sale */}
        </Typography>
      </Container>
    </>
  );
}

export default App;
