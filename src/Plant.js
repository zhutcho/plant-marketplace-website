import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Plant({ plant, buyPlant }) {
  function handleBuyPlant() {
    buyPlant(plant.id);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/assets/agave-titanota-white-ice.jpg`}
          alt="agave titanota white ice"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {plant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleBuyPlant}>
          BUY
        </Button>
      </CardActions>
    </Card>
  );
}

export default Plant;
