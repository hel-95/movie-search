export const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date(date);
  const year = d.getFullYear();
  const day = d.getDate();
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  return `${monthName} ${day}, ${year}`;
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
