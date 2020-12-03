const aboutPopupClose = document.getElementById("aboutPopup");
const status_ = document.getElementById("status");

/* Event listener to handle closure of About window */
aboutPopupClose.addEventListener("click", () => {
    document.getElementById("aboutPopup").style.display = "none";
});

document.getElementById('logBox').value += new Date().toLocaleTimeString() + ": Connect to a CH552x Device. On Windows, please replace the default driver with the WinUSB driver (use Zadig)." + "\r\n";

status_.addEventListener('DOMSubtreeModified', function (event)
{ 
	document.getElementById('logBox').value = document.getElementById('logBox').value + new Date().toLocaleTimeString() + ": " + status_.innerText + "\r\n";
});