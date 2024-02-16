export function formattedDataToString(date:string) {
  const diasDaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dataHora = new Date(date);

  const diaDaSemana = diasDaSemana[dataHora.getUTCDay()];

  const diaDoMes = dataHora.getUTCDate();

  const horaMinutos = `${String(dataHora.getUTCHours()).padStart(2, '0')}:${String(dataHora.getUTCMinutes()).padStart(2, '0')}`;

  const resultado = `${diaDaSemana}, ${String(diaDoMes).padStart(2, '0')}, ${horaMinutos}`;

  return resultado;
}


