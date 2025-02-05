        // Snooze: Restart the timer with 1 minute
        document.getElementById('snooze').addEventListener('click', () => {
            localStorage.setItem('remainingTime', 60); // Set 1 min in localStorage
            window.location.href = 'timer.html'; // Go back to timer
        });

        // Done: Return to Main Menu
        document.getElementById('done').addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to main menu
        });