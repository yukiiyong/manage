export const formatDate = (str) => {
  let date = new Date(str)
  let dateStr = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
  console.log(dateStr)
  return dateStr
}