export function formatDate(dateString: string, short: boolean = false): string {
  const [year, month] = dateString.split('-');
  
  const monthNames = {
    full: [
      'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
      'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'
    ],
    short: [
      'sty', 'lut', 'mar', 'kwi', 'maj', 'cze',
      'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'
    ]
  };
  
  const monthIndex = parseInt(month) - 1;
  const monthName = short ? monthNames.short[monthIndex] : monthNames.full[monthIndex];
  
  return `${monthName} ${year}`;
}

export function formatDateRange(startDate: string, endDate: string | null, short: boolean = false): string {
  const start = formatDate(startDate, short);
  const end = endDate ? formatDate(endDate, short) : 'obecnie';
  
  return `${start} - ${end}`;
}