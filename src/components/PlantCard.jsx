import React from "react";

function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h4>{name}</h4>

    <p>
        Price: {price}
    </p>
      <button
        onClick={() => onSoldOut(id)}
        className={soldOut ? "sold-out" : ""}
      >
      {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;