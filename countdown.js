document.addEventListener('DOMContentLoaded', function () {
  // Set the target date for the birthday (format: "YYYY/MM/DD HH:MM:SS")
  const birthdayDate = new Date("2023/12/31 00:00:00").getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = birthdayDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      // Birthday has arrived!
      clearInterval(countdownInterval);
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('birthday-message').style.display = 'block';
    }
  }
});
