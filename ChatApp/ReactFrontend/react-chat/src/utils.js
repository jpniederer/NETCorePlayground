export const getDateString = dateVal => {
  const date = new Date(dateVal);
  return date.toLocaleDateString() + " at " + 
    date.toLocaleTimeString();
}