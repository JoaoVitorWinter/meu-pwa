import Button from "../components/Button"
import Header from "../components/Header"
import Card from "../components/Card"
import Input from "../components/Input"

const InitialPage = () => {

  return (
    <>
    <Header />
    <div className="flex flex-col items-center mt-8">
      <div className="bg-green w-fit p-4 flex items-center gap-4 rounded-lg">
        <Input labelText={"Nome"} placeholder={"Digite um nome"}/>
        <Input labelText={"Quantidade"} placeholder={"Digite a quantidade"}/>
        <Button onClick={() => {alert("Teste")}}text={"Cadastrar"} />
      </div>
      <Card quantity={2} name={"Produto 1"}></Card>
    </div>
    </>
  )
}

export default InitialPage
