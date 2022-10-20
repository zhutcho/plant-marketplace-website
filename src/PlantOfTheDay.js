import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Plant({ plant_of_the_day }) {
  return (
    <Card sx={{ display: "flex", mb: 3 }}>
      <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/assets/agave-titanota-white-ice.jpg`}
          alt="agave titanota white ice"
          sx={{ maxWidth: 500 }}
        />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ pl: 1, pb: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {plant_of_the_day.plant_name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${plant_of_the_day.price_in_dollars}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {plant_of_the_day.total_stock} available
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default Plant;
