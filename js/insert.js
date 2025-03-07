// Function to prompt user for their name and display a greeting message
function greetUser() {
    // Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    // Check if the user entered a name
    if (userName) {
        // Display a greeting message with the user's name
        alert(`Hello ${userName}, insert your name`);
    } else {
        // If no name was entered, display a default message
        alert("Hello, insert your name");
    }
}

// Call the function to execute the greeting
greetUser();