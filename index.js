function updateTime() {
    function updateDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const currentDate = day + '/' + month + '/' + year;
      const currentTime = hours + ':' + minutes + ':' + seconds;
      let currentMonth = ""; // Change the const to let, as we'll be updating its value

      if (month == "01") {
        currentMonth = "January";
      }

      document.getElementById('current-date').innerText = currentDate;
      document.getElementById('current-time').innerText = currentTime;
    
    }

    // Update the date and time every second
    setInterval(updateDateTime, 1000);
  }

  // Update the time every second
  setInterval(updateTime, 1000);

function month()
{
const mypara=document.getElementById("myParagraph");
mypara.innerText="New Value";
}