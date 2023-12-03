export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedDuration =
    (hours > 0 ? `${hours}h` : "") +
    (remainingMinutes > 0 ? ` ${remainingMinutes}m` : "");

  return formattedDuration.trim(); // Trim any leading/trailing whitespace
};

export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
