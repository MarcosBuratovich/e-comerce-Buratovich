// Esta logica la use para averiguar si hat productos repetidos dentro del array.
// Asi cuando muestro el carrito no me genera varias veces el mismo producto a la vista.
export const combinedItems = (arr = []) => {
  const res = arr.reduce((acc, obj) => {
    let found = false
    for (let i = 0; i < acc.length; i++) {
      if (acc[i].id === obj.id) {
        found = true
        acc[i].total++
      }
    }
    if (!found) {
      obj.total = 1
      acc.push(obj)
    }
    return acc
  }, [])
  return res
}
