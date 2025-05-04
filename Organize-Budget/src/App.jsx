import './App.css'
import Config from './components/config'
import AddBudGet from './components/AddBudget';  
import { useEffect, useState } from 'react';
import { Trash2 } from "lucide-react";
import { v4 } from "uuid";

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  
  function onAddBudget(title, date, price, description){
    const newBudget  = {
      id: v4(),
      title,
      date,
      price,
      description,
      isCompleted: false,
    }
    console.log(newBudget)
    setList([...list, newBudget])
  }

  return (
   <div className='space-y-10'>
    <nav className='text-xl font-medium text-white h-19 flex items-center justify-between'>
      
      <div className='flex w-25 justify-around'>
        <img src={Config.logo} alt="" className='h-10 w-10' />
        <p>{Config.title}</p>
      </div>

      <div className='flex justify-around w-60'>
        <button>Lista de Despesas</button>
        <button><Trash2/></button>
      </div>
    </nav>

    <AddBudGet
      onAddBudget={onAddBudget}
    />

    

   </div>
  )
}

export default App
