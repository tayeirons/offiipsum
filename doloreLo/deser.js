const confetti = require('confetti');

// Asynchronous function to run confetti animation
async function runConfetti() {
  try {
    // Configuration options for the confetti
    const config = {
      // ... your configuration options here
    };

    // Run the confetti with the configuration
    await confetti(config);
  } catch (error) {
    console.error('Error running confetti:', error);
  }
}

// Call the function
runConfetti();
