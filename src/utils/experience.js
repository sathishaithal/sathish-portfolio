const JOIN_DATE = new Date(2025, 0, 1);

export function getExperienceYearsText(currentDate = new Date()) {
  const totalMonths =
    (currentDate.getFullYear() - JOIN_DATE.getFullYear()) * 12 +
    (currentDate.getMonth() - JOIN_DATE.getMonth());

  const years = Math.round((totalMonths / 12) * 2) / 2;

  return `${years.toFixed(1)}+ Years`;
}