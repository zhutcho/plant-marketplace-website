import Plant from './Plant'

function PlantList({ plants }) {
  return (
    plants.map(plant => {
      return <Plant plant={plant} />
    })
  );
}

export default PlantList;
