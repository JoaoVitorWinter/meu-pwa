import Input from "./Input";

const Header = () => {



  return (
    <header className="flex  items-center bg-primary justify-around p-6">
        <h1 className="text-2xl font-bold">DynaLists</h1>
        <Input width={"w-40 md:w-auto"}/>
    </header>
  )
}

export default Header