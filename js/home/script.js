// Load confirmation
console.log("Script loaded successfully!!");

// Name Changer
document.addEventListener("DOMContentLoaded", () => {
  // Select elements containing the username
  const userNameElement = document.querySelector(".profile p");

  // Change the innerText
  if (userNameElement){
  userNameElement.innerText = "Hi, Developer!";
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

      if (targetId.startwith("#")) {

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
});

