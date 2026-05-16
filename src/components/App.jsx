import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  // State to store all plants
  const [plants, setPlants] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // Fetch plants when component loads
useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data));
}, []);

  // Add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Toggle sold out status
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, soldOut: !plant.soldOut }
        : plant
    );

    setPlants(updatedPlants);
  }

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search 
        search={search} 
        setSearch={setSearch} />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </main>
  );
}

export default App;