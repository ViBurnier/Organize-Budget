import { v4 } from "uuid";
import { useEffect, useState } from "react";
import AddBudGet from "../components/AddBudget";
import Config from "../components/config";

function Home() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  //preciso ver se os valores(onAddBudget) ja existem no localStorage

  function onAddBudget(title, date, price, description) {
    const newBudget = {
      id: v4(),
      title,
      date: Config.dateFormat(date),
      price,
      description,
      isCompleted: false,
    };

    const fi = list.some(valor => 
      valor.title == newBudget.title &&
      valor.date == newBudget.date &&
      valor.price == newBudget.price &&
      valor.description == newBudget.description
    )

    console.log(fi)


    if(fi){
      alert("JA EXISTE NA LISTA")
      return 
    }
    
    setList([...list, newBudget]);    
      
    
    //TIRAR QUANDO TERMINAR O PROJETO
    // console.log(newBudget);

    


  }

  return (
    <div>
      <AddBudGet onAddBudget={onAddBudget} />
    </div>
  );
}

export default Home;
