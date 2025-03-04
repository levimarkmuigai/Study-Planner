// Load confirmation
console.log("Script loaded successfully!!");

// Name Changer
document.addEventListener("DOMContentLoaded", () => {
  
  // Select elements containing the username
  const userNameElement = document.querySelector(".profile p");

  // Default username
  let userName = "John Doe"
  
  // Change the innerText
  if (userNameElement){
  userNameElement.innerText = "Hi, Developer!";
  userName = userNameElement.innerText.replace("Hi, ", "").trim();
  }

  // Handling Navigation Link Clicks and Smooth Scrolling 
  const navLinks = document.querySelectorAll(".nav-list a"); //Selects all navigation links

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor jump
      
      // Remove 'active' class from all links before adding it to the clicked one
      navLinks.forEach(nav => nav.classList.remove("active"));

      // Add 'active' class to clicked link
      event.currentTarget.classList.add("active");

      // Get the target section's ID from href
      const targetId = event.currentTarget.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {

        const targetSection = document.querySelector(targetId);

        // If the section exists, smooth scroll
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start" // Align to the top of the view port
          });
        }else{
          window.location.href = targetId;
        }
      }
    });
  });

  // *******Loading Dashboard Welcome Dynamically********
  // Select the dashboard welcome element
  const dashboardWelcome = document.getElementById("dashboard-welcome");

  function showWelcomeMessage(){
    if (dashboardWelcome){
      // Delay before the message
      setTimeout(() => {
      dashboardWelcome.innerText = `Welcome to your Dashboard, ${userName}!`;
      dashboardWelcome.classList.add("show");
      }, 500); // 2-Second delay
    }
  }
  // Initial Welcome Message after 2seconds
  setTimeout(showWelcomeMessage, 2000);

  // Repeat the effect every 1.5 minutes
  setInterval(showWelcomeMessage, 10000);
});


// Adding the Pulsating Ring Effect to the Boxes
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".info-box");

  boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.classList.add("hover-effect");
    });

    box.addEventListener("mouseleave", () => {
      box.classList.remove("hover-effect");
    });
  });
});

//Selecting the Time-Spent Element
const timeElement = document.getElementById("time-invested");

// Retrieve stored time (if any)
let timeSpent = parseInt(localStorage.getItem("timeSpent")) || 0;

// Function to update the timer by the second
function updateTime() {
  timeSpent ++; // Increament the time 

  // Convert the seconds to hours and minutes
  let hours = Math.floor(timeSpent / 3600);
  let minutes = Math.floor((timeSpent / 3600) % 60);\
  let displayTime = `{hours}Hrs {minutes}Min`;

  // Update the displayed time
  timeElement.textContent = displayTime
}

// Start updating the time every 1000seconds
setInterval(updateTime, 1000);