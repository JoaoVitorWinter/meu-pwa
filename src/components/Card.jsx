import { useEffect } from "react"
import { useState } from "react"
import Button from "./Button"

const Card = ({name, quantity}) => {  
    const [currentQuantity, setCurrentQuantity] = useState(quantity)

    useEffect(() => {
      if (currentQuantity <= 0) {

      }
    }, [currentQuantity]);

    const handleChange = (change) => {
        setCurrentQuantity(currentQuantity + change);
    }

    return (
    <div className="flex m-auto mt-6 rounded-xl bg-primary px-4 md:px-12 py-4 items-center justify-evenly gap-4 md:gap-20">
        <p className="">{name}</p>
        <div className="flex justify-around gap-2 items-center">
        <button onClick={() => {handleChange(-1)}} className="bg-black text-white w-6 rounded-sm">-</button>
        <p className="">{currentQuantity}</p>
        <button onClick={() => {handleChange(1)}} className="bg-black text-white w-6 rounded-sm">+</button>
        </div>
        <Button text={"Excluir"}></Button>
    </div>
  )
}

export default Card