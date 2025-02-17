        // Snooze: Restart the timer with 1 minute
        document.getElementById('snooze').addEventListener('click', () => {
            localStorage.setItem('remainingTime', 60); // Set 1 min in localStorage
            window.location.href = 'timer.html'; // Go back to timer
        });

        // Done: Return to Main Menu
        document.getElementById('done').addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to main menu
        });

        const teaData = {
            green: {
                image: "media/images/cup_green.png"
            },
            black: {
                image: "media/images/cup_black.png"
            },
            white: {
                image: "media/images/cup_white.png"
            },
            infusion: {
                image: "media/images/cup_fruit.png"
            }
        };

        const selectedTea = localStorage.getItem('selectedTea');
        const teaImageElement = document.getElementById('tea-type');

        // Update tea image if element exists
        if (selectedTea && teaData[selectedTea] && teaImageElement) {
            teaImageElement.src = teaData[selectedTea].image;
        } else {
            console.warn("Tea image element not found in Timer.html");
        }