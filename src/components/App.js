import React, { useState, useEffect } from "react";

import Detail from "./Detail"
import DogBar from "./DogBar"
import Filter from "./Filter";



function App() {
  const [dogs, setDogs] = useState([])
  const [onlyGoodDogs, setOnlyGoodsDogs] = useState(false)
  const [selectedDogId, setSelectedDogId] = useState(null)

  useEffect(() =>{
    fetch("http://localhost:3001/pups")
    .then(res => res.json())
    .then(data => setDogs(data))
  },[])

  const onUpdateDog = (updatedDog) => {
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  const handleToggleDogs = () => {
    setOnlyGoodsDogs(!onlyGoodDogs)
  }

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId)

  let displayDogs = dogs;
  if (onlyGoodDogs) {
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog);
  }


  return (
    <div className="App">
      <Filter onToggleDogs={handleToggleDogs} onlyGoodDogs={onlyGoodDogs}/>
      <DogBar dogs={displayDogs} onClickDog={setSelectedDogId} />
      <Detail dog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
