import React from "react"

const DogBar = ({ dogs, onClickDog }) => {
  const spans = dogs.map((dog) => (
  <span key={dog.id} onClick={() => onClickDog(dog.id)}>
      {dog.name}
    </span>
  ))

    return (
        <div id="dog-bar">{spans}</div>
    )
}

export default DogBar