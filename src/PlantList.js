import Plant from "./Plant";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function PlantList({ plants, buyPlant }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {plants.map((plant) => {
          return <Plant key={plant.plant_id_str} plant={plant} buyPlant={buyPlant} />;
        })}
      </Grid>
    </Box>
  );
}

export default PlantList;
