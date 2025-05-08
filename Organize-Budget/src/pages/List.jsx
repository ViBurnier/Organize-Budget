function List(){

    const list = JSON.parse( localStorage.getItem('list') )

    //vai percorrer todo arr(lista de objeto

    function construirLista(){
        const arr = []
        
        for(let i = 0; i < list.length; i++){
            const title =  list[i].title
            const description = list[i].description
            const date = list[i].date
            const price = list[i].price

            arr.push(
                <div className=" bg-amber-50 p-5 my-3">
                    <p>title: {title}</p>
                    <p>description: {description}</p>        
                    <p>price: {price}</p> 
                    <p>date: {date}</p>
                </div>
            )  
        }

        return arr
    }


    return(

        <div className="flex justify-center">
            <div className=" h-full w-[100rem] bg-amber-950 p-5">

                

                {construirLista()}
                
            </div>
        </div>
    )
}

export default List;