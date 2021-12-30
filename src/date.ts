export const checkDate = (value: number): string => {
  const isSingle = value < 10
  return (isSingle ? '0' : '') + value
}

export const getDateString = (today: Date) => {
  const currentYear = today.getFullYear();
  const currentMonth = checkDate(today.getMonth() + 1);
  const currentDay = checkDate(today.getDate());
  return `${currentYear}-${currentMonth}-${currentDay}`
}

export const getNextDay = () => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + 1).toString()
  return nextDay
}
export const getPlusTwoDays = (checkIn) => {
  const checkOut = new Date(checkIn)
  checkOut.setDate(checkOut.getDate() + 2).toString()
  return checkOut
}



