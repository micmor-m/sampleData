// Return a time stamp without day of the week and without seconds
export default function formatTimestamp(dateTime) {
  const d = dateTime;
  const date = new Date(+d); //NB: use + before variable name

  // Remove day of the week from the date: Wed Sep 01 2021 => Sep 01 2021
  let dateFinal = date.toDateString().substring(4);

  // Get time in format: 2:03:04 AM
  let timeInitial = date.toLocaleTimeString("en-US");
  let timeFinal = "";

  // Check if the hours has double or single digit and remove the seconds from time:
  // 10:18:30 AM => 10:18 AM
  if (timeInitial.length === 10) {
    // If hours has one digit
    timeFinal =
      timeInitial.slice(0, 4) + timeInitial.slice(8).toLocaleLowerCase("en-US");
  } else if (timeInitial.length === 11) {
    // If hours has two digits
    timeFinal =
      timeInitial.slice(0, 5) + timeInitial.slice(9).toLocaleLowerCase("en-US");
  } else {
    return "Invalid format";
  }
  return `${dateFinal} @ ${timeFinal}`;
}
