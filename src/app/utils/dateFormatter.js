const locale = 'en-us';

const dateFormatter = {
  buildDateRangeString,
};

function formatDate(date) {
  if (date instanceof Date) {
    return (
      date.toLocaleString(locale, { month: 'long' }) + ' ' + date.getFullYear()
    );
  }
  return date;
}

function buildDateRangeString(startDate, endDate) {
  if (!endDate) {
    return formatDate(startDate);
  }
  return formatDate(startDate) + ' to ' + formatDate(endDate);
}

export default dateFormatter;
