export function convertDateFormat(
  inputDate: string | undefined | null
): string {
  if (inputDate === undefined || inputDate === null) return "";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month, day] = inputDate.split("-").map(Number);
  const monthName = months[month - 1];

  return `${monthName} ${day} ${year}`;
}
