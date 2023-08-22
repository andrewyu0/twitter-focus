console.log("Extension is loading...");

function hideHeader() {
  const header = document.querySelector('header[role="banner"].css-1dbjc4n.r-obd0qt.r-16y2uox.r-lrvibr.r-1g40b8q');

  if (header) {
    header.style.display = 'none';
    console.log("Header has been hidden.");
  } else {
    console.log("Header not found.");
  }
}

// Try to hide the header every second until found
const intervalID = setInterval(() => {
  console.log("Looking for header...");
  hideHeader();
}, 1000);

// Stop trying after 10 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Stopped looking for header.");
}, 10000);
