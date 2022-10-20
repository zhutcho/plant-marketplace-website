import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Plant({ plant, buyPlant }) {
  function handleBuyPlant() {
    buyPlant(plant.id);
  }

  return (
    <Grid xs={2} sm={4} md={4} key={plant.plant_id_str}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/assets/agave-titanota-white-ice.jpg`}
            alt="agave titanota white ice"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {plant.plant_name_str}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${plant.price_in_dollars_int}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {plant.total_stock_int} available
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={handleBuyPlant}>
            BUY
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Plant;
