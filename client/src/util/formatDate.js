const formatDate = (dateInput) => {
  const date = new Date(dateInput);

  // Check if the input is a valid date
  if (isNaN(date)) {
    return "Invalid Date";
  }

  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export { formatDate };
