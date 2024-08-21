// Set up an interval to update the clock every second
setInterval(setClock, 1000);

// Get references to the clock hand elements
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

// Function to update the clock hands
function setClock() {
    const currentDate = new Date();  // Get the current date and time

    // Calculate the rotation ratios
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours() % 12) / 12;

    // Apply rotation to each hand
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

// Function to apply rotation to an element
function setRotation(element, rotationRatio) {
    if (element) {
        // Rotate the element based on the calculated ratio
        element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`;
    }
}

// Initialize the clock immediately
setClock();


