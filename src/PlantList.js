import Plant from "./Plant";

function PlantList({ plants, buyPlant }) {
  return plants.map((plant) => {
    return <Plant key={plant.id} plant={plant} buyPlant={buyPlant} />;
  });
}

export default PlantList;
