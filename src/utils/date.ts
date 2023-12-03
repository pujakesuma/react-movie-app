const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default formatDate;
