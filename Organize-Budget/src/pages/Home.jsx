import { v4 } from "uuid";
import { useEffect, useState } from "react";
import AddBudGet from "../components/AddBudget";

function Home() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function onAddBudget(title, date, price, description) {
    const newBudget = {
      id: v4(),
      title,
      date,
      price,
      description,
      isCompleted: false,
    };
    
    //TIRAR QUANDO TERMINAR O PROJETO
    console.log(newBudget);
    setList([...list, newBudget]);
  }

  return (
    <div>
      <AddBudGet onAddBudget={onAddBudget} />
    </div>
  );
}

export default Home;
