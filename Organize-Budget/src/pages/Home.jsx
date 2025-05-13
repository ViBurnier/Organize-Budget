import { v4 } from "uuid";
import { useState } from "react";
import AddBudGet from "../components/AddBudget";
import Config from "../components/Config";
function Home() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  function onAddBudget(title, date, price, description) {
    const newBudget = {
      id: v4(),
      title,
      date: Config.dateFormat(date),
      price,
      description,
      isCompleted: false,
    };

    const valuesValidation = list.some(
      (value) =>
        value.title == newBudget.title &&
        value.date == newBudget.date &&
        value.price == newBudget.price &&
        value.description == newBudget.description
    );

    if (valuesValidation) {
      alert("JA EXISTE NA LISTA");
      return;
    }

    localStorage.setItem("list", JSON.stringify([...list, newBudget]));
    setList([...list, newBudget]);
  }

  return (
    <div>
      <AddBudGet onAddBudget={onAddBudget} />
    </div>
  );
}

export default Home;
