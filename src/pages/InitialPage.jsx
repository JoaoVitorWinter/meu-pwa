import Button from "../components/Button"
import Header from "../components/Header"
import Card from "../components/Card"
import Input from "../components/Input"
import { useEffect, useState } from "react"

const InitialPage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shoppingList, setShoppingList] = useState(new Array());
  
  useEffect(() => {
    var newList = JSON.parse(localStorage.getItem("list"));
    setShoppingList(newList);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("list", JSON.stringify(shoppingList));
    }, 0);
  }, [shoppingList]);


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  const createCard = () => {
    if (name && quantity) {
      addShopping([name, quantity]);
    } else {
      alert("Por favor, não deixe os campos vazios!")
    }
  }

  const addShopping = (item) => {
    const newList = [...shoppingList];
    newList.push(item);
    setShoppingList(newList);
  }

  return (
    <>
    <Header />
    <main className="flex flex-col items-center mt-8">
      <div className="bg-primary w-fit p-4 flex flex-col md:flex-row items-center gap-4 rounded-lg">
        <Input onChange={handleNameChange} labelText={"Nome"} placeholder={"Digite um nome"} type={"text"}/>
        <Input onChange={handleQuantityChange} labelText={"Quantidade"} placeholder={"Digite a quantidade"} type={"number"}/>
        <Button onClick={() => {createCard()}}text={"Cadastrar"} />
      </div>
      <div>
        {
          shoppingList.map((item, index) => {
            return (
              <Card key={index} index={index} setShoppingList={setShoppingList} name={item[0]} quantity={item[1]}/>
            )
          })
        }
      </div>
    </main>
    </>
  )
}

export default InitialPage
