const JOIN_DATE = new Date(2025, 0, 1);

export function getExperienceYearsText(currentDate = new Date()) {
  const totalMonths =
    (currentDate.getFullYear() - JOIN_DATE.getFullYear()) * 12 +
    (currentDate.getMonth() - JOIN_DATE.getMonth());

  const years = (Math.max(totalMonths, 0) / 12).toFixed(1);
  return `${years} Years`;
}
