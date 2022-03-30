export default function DayDate(date) {
  const dayName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "Augst",
    "September",
    "October",
    "November",
    "December",
  ];
  var dateData = new Date(date);
  var data = {
    day: dayName[dateData.getDay()],
    date: dateData.getDate(),
    month: monthName[dateData.getMonth()],
    year: dateData.getFullYear(),
  };

  return data;
}
