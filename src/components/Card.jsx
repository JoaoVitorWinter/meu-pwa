import { useState } from "react"
import Button from "./Button"

const Card = ({name, quantity}) => {  
    const [currentQuantity, setCurrentQuantity] = useState(quantity)
    return (
    <div className="flex m-auto mt-6 rounded-xl bg-green px-12 py-4 items-center justify-evenly gap-20">
        <p className="">{name}</p>
        <div className="flex justify-around gap-2 items-center">
        <button className="bg-black text-white px-2 rounded-sm">+</button>
        <p className="">{quantity}</p>
        <button className="bg-black text-white px-2 rounded-sm">-</button>
        </div>
        <Button text={"Excluir"}></Button>
    </div>
  )
}

export default Card