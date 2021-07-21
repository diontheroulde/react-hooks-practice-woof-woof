import React from "react"

const Filter = ({ onToggleDogs, onlyGoodDogs }) => {
    return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={onToggleDogs}>
            Filter good dogs: {onlyGoodDogs ? "ON" : "OFF"}</button>
      </div>
    )
}

export default Filter