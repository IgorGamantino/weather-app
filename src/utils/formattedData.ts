export function formattedDataToString(date:string) {
  const diasDaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dateHours = new Date(date);

  const daysWeek = diasDaSemana[dateHours.getUTCDay()];

  const dayMonth = dateHours.getUTCDate();

  const horaMinutos = `${String(dateHours.getUTCHours()).padStart(2, '0')}:${String(dateHours.getUTCMinutes()).padStart(2, '0')}`;

  const result = `${daysWeek}, ${String(dayMonth).padStart(2, '0')}, ${horaMinutos}`;

  return result;
}


