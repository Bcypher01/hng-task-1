document.addEventListener("DOMContentLoaded", () => {
  // Display current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    document.querySelector("[data-testid='currentTimeUTC']").textContent =
      utcTime;
  }
  updateTime();
  setInterval(updateTime, 1000); // Update time every second

  // Display current day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  document.querySelector("[data-testid='currentDay']").textContent =
    days[today];
});
