export function getFormattedDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDate: string = date.toLocaleDateString('en-US', options);

  return formattedDate;
}
