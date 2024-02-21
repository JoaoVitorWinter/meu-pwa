export default function removeCard(index){
    var newList = JSON.parse(localStorage.getItem("list"))
    newList.splice(index, 1);
    return newList;
}