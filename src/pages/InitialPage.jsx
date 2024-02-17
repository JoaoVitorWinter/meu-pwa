import Button from "../components/Button"
import Header from "../components/Header"
import Card from "../components/Card"
import Input from "../components/Input"
import { useState } from "react"

const InitialPage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shoppingList, setShoppingList] = useState(new Array());

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  const createCard = () => {
    addShopping([name, quantity]);
    console.log([name, quantity])
  }

  const addShopping = (item) => {
    const newList = [...shoppingList];
    newList.push(item);
    setShoppingList(newList);
  }

  return (
    <>
    <Header />
    <div className="flex flex-col items-center mt-8">
      <div className="bg-green w-fit p-4 flex items-center gap-4 rounded-lg">
        <Input onChange={handleNameChange} labelText={"Nome"} placeholder={"Digite um nome"} type={"text"}/>
        <Input onChange={handleQuantityChange} labelText={"Quantidade"} placeholder={"Digite a quantidade"} type={"number"}/>
        <Button onClick={() => {createCard()}}text={"Cadastrar"} />
      </div>
      <div>
        {
          shoppingList.map((item, index) => {
            console.log(item)
            return (
              <Card key={index} name={item[0]} quantity={item[1]}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default InitialPage
