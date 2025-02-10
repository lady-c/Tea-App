document.querySelectorAll('.tea-button').forEach(button => {
    button.addEventListener('click', function () {
        const selectedTea = this.getAttribute('teaData'); // Get tea type
        localStorage.setItem('selectedTea', selectedTea); // Store in localStorage
        window.location.href = 'PreparationAdvice.html'; // Navigate to recommendations page
    });
});

document.getElementById('minimize').addEventListener('click', () => {
    window.electron.minimizeWindow(); // ✅ Uses ipcRenderer safely
});

document.getElementById('close').addEventListener('click', () => {
    window.electron.closeWindow(); // ✅ Uses ipcRenderer safely
});

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('start-timer').addEventListener('click', () => {
        window.location.href = 'Timer.html'; // Navigate to the timer page
    });
});

// Start: Go to TeaSelection
document.getElementById('start').addEventListener('click', () => {
    window.location.href = 'TeaSelection.html'; // go to tea selection page
});

// Tea data
const teaData = {
    green: {
        name: "Green Tea",
        temp: "75-85°C",
        time: "2-3 minutes"
    },
    black: {
        name: "Black Tea",
        temp: "90-100°C",
        time: "3-5 minutes"
    },
    white: {
        name: "White Tea",
        temp: "80-90°C",
        time: "4-7 minutes"
    },
    infusion: {
        name: "Infusion",
        temp: "75-85°C",
        time: "2-3 minutes"
    },
};

// Get selected tea from localStorage
const selectedTea = localStorage.getItem('selectedTea');

if (selectedTea && teaData[selectedTea]) {
    document.getElementById('tea-name').textContent = teaData[selectedTea].name;
    document.getElementById('tea-temp').textContent = `Temperature: ${teaData[selectedTea].temp}`;
    document.getElementById('tea-time').textContent = `Brewing Time: ${teaData[selectedTea].time}`;
} else {
    document.getElementById('tea-name').textContent = "Tea not found";
}