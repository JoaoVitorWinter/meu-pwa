import Button from "../components/Button"
import Header from "../components/Header"

const InitialPage = () => {

  return (
    <>
    <Header />
    <Button onClick={() => {alert("Teste")}}text={"Cadastrar"} />
    </>
  )
}

export default InitialPage
