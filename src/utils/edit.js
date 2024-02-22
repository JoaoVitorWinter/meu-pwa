export default function editCard(newValue, index) {
    const newList = JSON.parse(localStorage.getItem("list"));
    newList[index][1] = newValue;
    return newList;
}