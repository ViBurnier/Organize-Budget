//data formatada para 
function dateFormatBrasil(date){
    const param = new Date(date)
    const currentDay = param.getDate()
    const month = param.getMonth() + 1
    const year = param.getFullYear()

    return `${currentDay}/${month}/${year}`
} 

const Config ={
    logo: "/src/image/notas.png",
    title: "OB",
    dateFormat: dateFormatBrasil
}



export default Config;