// Name Changer
document.addEventListener("DOMContentLoaded", () => {
  // Select elements containing the username
  const userNameElement = document.querySelector("p");

  // Change the Text
  userNameElement.innerText = "Hi, Developer!";
});

// Change asidebar link color Onclick
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link =>{
    link.addEventListener("click", (event) =>{
      //Remove active class from all links
      document.querySelectorAll("nav a").forEach(1 => 1.classList.remove("active"));

      // Add the active class to the clicked links
      event.target.classList.add("active");
    });
  });
});
