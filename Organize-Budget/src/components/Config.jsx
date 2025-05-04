//data formatada para 
function dateFormatBrasil(){
    const date = new Date()
    const currentDay = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${currentDay}/${month}/${year}`
} 

const Config ={
    logo: "/src/image/notas.png",
    title: "OB",
    dateFormat: dateFormatBrasil()
}



export default Config;