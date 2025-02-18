document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.tea-button').forEach(button => {
        button.addEventListener('click', function () {
            const selectedTea = this.getAttribute('teaData');
            localStorage.setItem('selectedTea', selectedTea); // Store in localStorage
            window.location.href = 'PreparationAdvice.html'; // Navigate to recommendations page
        });
    });

    const minimizeButton = document.getElementById('minimize-window');
    if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            window.electron.minimizeWindow(); // ✅ Uses ipcRenderer safely
        });
    }

    const closeButton = document.getElementById('close-window');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            window.electron.closeWindow(); // ✅ Uses ipcRenderer safely
        });
    }

    const startTimerButton = document.getElementById('start-timer');
    if (startTimerButton) {
        startTimerButton.addEventListener('click', () => {
            window.location.href = 'timer.html'; // Navigate to the timer page
        });
    }

    const backButton = document.getElementById('back');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'TeaSelection.html'; // Navigate to the tea selection page
        });
    }

    const startButton = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'TeaSelection.html'; // Go to tea selection page
        });
    }

    // Get selected tea from localStorage
    const selectedTea = localStorage.getItem('selectedTea');
    const teaData = {
        black: {
            name: "Black Tea",
            temp: "90-100°C",
            time: "3-5 minutes",
            image: "media/images/cup_black.png"
        },
        green: {
            name: "Green Tea",
            temp: "70-85°C",
            time: "2-3 minutes",
            image: "media/images/cup_green.png"
        },
        white: {
            name: "White Tea",
            temp: "75-85°C",
            time: "3-5 minutes",
            image: "media/images/cup_white.png"
        },
        infusion: {
            name: "Infusion",
            temp: "90-100°C",
            time: "5-10 minutes",
            image: "media/images/cup_fruit.png"
        },
    };

    if (selectedTea && teaData[selectedTea]) {
        document.getElementById('tea-name').textContent = teaData[selectedTea].name;
        document.getElementById('tea-temp').textContent = teaData[selectedTea].temp;
        document.getElementById('tea-time').textContent = teaData[selectedTea].time;
        document.getElementById('tea-type').src = teaData[selectedTea].image;
    } else {
        const teaNameElement = document.getElementById('tea-name');
        if (teaNameElement) {
            teaNameElement.textContent = "Tea not found";
        }
    }

});