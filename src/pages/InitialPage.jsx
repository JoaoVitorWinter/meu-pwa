import Button from "../components/Button"
import Header from "../components/Header"
import Card from "../components/Card"
import Input from "../components/Input"
import { useEffect, useState } from "react"

const InitialPage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shoppingList, setShoppingList] = useState(new Array());
  const [search, setSearch] = useState("");
  
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
    if (e.target.value > -1) {
      setQuantity(parseInt(e.target.value));
    }
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const createCard = () => {
    if (name && quantity > 0) {
      addShopping([name, quantity]);
      setName("");
      setQuantity("");
    } else {
      alert("Por favor, coloque um nome e uma quantidade maior que zero!")
    }
  }

  const addShopping = (item) => {
    const newList = [...shoppingList];
    newList.push(item);
    setShoppingList(newList);
  }

  return (
    <>
    <Header handleSearchChange={handleSearchChange}/>
    <main className="flex flex-col items-center mt-8">
      <div className="bg-primary w-fit p-4 flex flex-col md:flex-row items-center gap-4 rounded-lg">
        <Input onChange={handleNameChange} value={name} labelText={"Nome"} placeholder={"Digite um nome"} type={"text"}/>
        <Input onChange={handleQuantityChange} value={quantity || ""} labelText={"Quantidade"} placeholder={"Digite a quantidade"} type={"number"}/>
        <Button onClick={() => {createCard()}} text={"Cadastrar"} />
      </div>
      <div>
        {
          shoppingList.map((item, index) => {
            if (item[0].includes(search)) {
              return (
                <Card key={index} index={index} setShoppingList={setShoppingList} name={item[0]} quantity={item[1]}/>
                )
              }
          })
        }
      </div>
    </main>
    </>
  )
}

export default InitialPage
