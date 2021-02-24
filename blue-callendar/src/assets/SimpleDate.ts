const getSimpleTime = (date: Date) => {
    let minutes = date.getMinutes().toString();
    if(date.getMinutes() === 0){
        minutes += "0";
    }
    return date.getDate() +
        "/" +  (date.getMonth() + 1) +
        "/" +  date.getFullYear() +
        " " +  (date.getHours() -3) +
        ":" +  minutes;
}

export const getISOTime = (date: Date) => {
    return date.toISOString().slice(0,16);
}

export default getSimpleTime;