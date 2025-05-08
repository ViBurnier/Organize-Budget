function List() {
  const list = JSON.parse(localStorage.getItem("list"));

  return (
    <div className="flex justify-center">
      <div className=" h-full w-[100rem] bg-amber-950 p-5">
        {list.map(list => (
          <div  className=" bg-amber-50 p-5 my-3">
            <p>title: {list.title}</p>
            <p>description: {list.description}</p>
            <p>price: {list.price}</p>
            <p>date: {list.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
