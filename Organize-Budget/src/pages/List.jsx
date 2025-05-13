import { Trash2 } from "lucide-react";
import { useState } from "react";

function List() {
  
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])

  function onDeletBudget(id){
    const filterId = list.filter(idList => id != idList.id)
    localStorage.setItem("list", JSON.stringify(filterId))
    setList(filterId)
  }

  return (

    <div className="flex justify-center">
      <div className=" h-full w-[100rem] bg-amber-950 p-5">
        {list.map(list => (
          <div  className=" bg-amber-50 p-5 my-3">

            <p>title: {list.title}</p>
            <p>description: {list.description}</p>
            <p>price: {list.price}</p>
            <p>date: {list.date}</p>

            <button onClick={() => { onDeletBudget(list.id)}}>
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default List;
