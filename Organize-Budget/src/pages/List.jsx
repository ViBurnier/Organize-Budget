function List() {
  const list = JSON.parse(localStorage.getItem("list"));

  return (
    <div className="flex justify-center">
      <div className=" h-full w-[100rem] bg-amber-950 p-5">
        {list.map((value, index) => (
          <div key={index} className=" bg-amber-50 p-5 my-3">
            <p>title: {value.title}</p>
            <p>description: {value.description}</p>
            <p>price: {value.price}</p>
            <p>date: {value.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
