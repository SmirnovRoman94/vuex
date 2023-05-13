// получае данные с localStorage
export function getItems(nameType) {
  let arr = localStorage.getItem(nameType)
  return JSON.parse(arr)
}
// обновляем данные в localStorage
export const setItem = (nameItem, value) => localStorage.setItem(nameItem, value)
