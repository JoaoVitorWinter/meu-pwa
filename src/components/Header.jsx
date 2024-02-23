import { useState } from "react";
import Input from "./Input";

const Header = ({handleSearchChange}) => {

  return (
    <header className="flex  items-center bg-primary justify-around p-6">
        <h1 className="text-2xl font-bold">DynaLists</h1>
        <Input onChange={handleSearchChange} placeholder={"Pesquise itens"} type={"text"} width={"w-40 md:w-auto"}/>
    </header>
  )
}

export default Header