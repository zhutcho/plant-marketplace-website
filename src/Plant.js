function Plant({ plant, buyPlant }) {
  function handleBuyPlant() {
    buyPlant(plant.id);
  }

  return (
    <div>
      <label>
        {plant.name}
        <input type="checkbox" checked={plant.sold} onChange={handleBuyPlant} />
      </label>
    </div>
  );
}

export default Plant;
