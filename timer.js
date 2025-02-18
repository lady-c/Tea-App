// Tea data (same as before)
const teaData = {
    green: {
        name: "Green Tea",
        time: 2,
        image: "media/images/cup_green.png"
    }, // in minutes
    black: {
        name: "Black Tea",
        time: 3,
        image: "media/images/cup_black.png"
    },
    white: {
        name: "White Tea",
        time: 3,
        image: "media/images/cup_white.png"
    },
    infusion: {
        name: "Infusion",
        time: 5,
        image: "media/images/cup_fruit.png"
    }
};

// Get selected tea from localStorage
const selectedTea = localStorage.getItem('selectedTea');
const teaImageElement = document.getElementById('tea-type');

// Update tea image if element exists
if (selectedTea && teaData[selectedTea] && teaImageElement) {
    teaImageElement.src = teaData[selectedTea].image;
} else {
    console.warn("Tea image element not found in timer.html");
}


// Set default brewing time (if tea is not found, default to 3 minutes)
//let remainingTime = ((teaData[selectedTea] && teaData[selectedTea].time) || 3) * 60;

// Check if there is a stored snooze time, otherwise use the default
let storedTime = localStorage.getItem('remainingTime');
let remainingTime = storedTime ? parseInt(storedTime) : (teaData[selectedTea].time || 3) * 60;

// Clear stored time after using it
localStorage.removeItem('remainingTime');

// Display tea name
// document.getElementById('tea-name').textContent = `${teaData[selectedTea]?.name || "Tea"} Timer`;

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the countdown
function startTimer() {
    updateTimerDisplay();
    const timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            window.location.href = 'done.html'; // Redirect to done page
        }

    }, 1000);
}

// Add 1 minute when the button is clicked
document.getElementById('add-minute').addEventListener('click', () => {
    remainingTime += 60;
    updateTimerDisplay();
});

// Debug button to skip the timer
// document.getElementById('debug-skip').addEventListener('click', () => {
//     remainingTime = 0;
//     updateTimerDisplay();
// });


// Start the timer when the page loads
startTimer();