import { useEffect } from "react";
import { useState } from "react";
import editCard from "../utils/edit";
import removeCard from "../utils/remove";
import Button from "./Button";
import { animated, useSpring } from "@react-spring/web";

const Card = ({ name, quantity, index, setShoppingList }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  useEffect(() => {
    if (currentQuantity <= 0) {
      setShoppingList(removeCard(index));
    } else if (currentQuantity != quantity) {
      setShoppingList(editCard(currentQuantity, index));
    }
  }, [currentQuantity]);

  const handleChange = (change) => {
    setCurrentQuantity(currentQuantity + change);
  };

  const styles = useSpring({
    from:{
      x: -200,
      opacity: 0,
    },
    to:{
      x: 0,
      opacity: 1,
    },
    config: {
      mass: 2,
    },
  })

  return (
    <animated.div style={styles} className="flex m-auto mt-6 rounded-xl bg-primary px-4 md:px-12 py-4 items-center justify-evenly gap-4 md:gap-20">
      <p className="">{name}</p>
      <div className="flex justify-around gap-2 items-center">
        <button
          onClick={() => {
            handleChange(-1);
          }}
          className="bg-black text-white w-6 rounded-sm"
        >
          -
        </button>
        <p className="">{currentQuantity}</p>
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
    </animated.div>
  );
};

export default Card;
