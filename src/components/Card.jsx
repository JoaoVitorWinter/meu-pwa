import { useEffect } from "react";
import { useState } from "react";
import editCard from "../utils/edit";
import removeCard from "../utils/remove";
import Button from "./Button";

const Card = ({ name, quantity, index, setShoppingList }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  useEffect(() => {
    setTimeout(() => {
      setCurrentQuantity(quantity);
    }, 0);
  });

  useEffect(() => {
    if (currentQuantity <= 0) {
      setShoppingList(removeCard(index));
    } else if (currentQuantity != quantity) {
      setShoppingList(editCard(currentQuantity, index));
    }
  }, [currentQuantity]);

  const handleChange = (change) => {
    if (currentQuantity + change > 0) {
      setCurrentQuantity(currentQuantity + change);
    } 
  };

  return (
    <div className="flex m-auto mt-6 rounded-xl bg-primary px-4 md:px-12 py-4 items-center justify-evenly gap-2 md:gap-20">
      <p className="w-20 break-words text-center">{name}</p>
      <div className="flex justify-around gap-2 items-center">
        <button
          onClick={() => {
            handleChange(-1);
          }}
          className="bg-black text-white w-6 rounded-sm"
        >
          -
        </button>
        <p className="w-16 text-center overflow-x-auto">{currentQuantity}</p>
        <button
          onClick={() => {
            handleChange(1);
          }}
          className="bg-black text-white w-6 rounded-sm"
        >
          +
        </button>
      </div>
      <Button text={"Excluir"} onClick={() => {setShoppingList(removeCard(index))}}></Button>
    </div>
  );
};

export default Card;
