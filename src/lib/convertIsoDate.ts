export function convertIsoDate(
  isoDate: string | undefined | null | Date
): string {
  if (isoDate === undefined || isoDate === null) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
