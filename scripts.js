


let projects = [
    {
      title: "Interactive Gallery",
      description: "A dynamic image gallery built using JavaScript.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using HTML, CSS, and JavaScript.",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "An app to manage tasks dynamically.",
      link: "#"
    },
    {
      title: "Weather App",
      description: "A weather app using API to fetch real-time data.",
      link: "#"
    }
  ];
  

  function displayProjects() {
    const projectContainer = document.querySelector('.projects-container');
  

    for (let i = 0; i < projects.length; i++) {
      let project = projects[i];
  

      let projectCard = document.createElement('div');
      projectCard.className = 'project-card';
  
      // Create the project structure with title, description, and link
      projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn">View More</a>
      `;
  
      // Add the project card to the project container
      projectContainer.appendChild(projectCard);
    }
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    displayProjects(); // Call function to display projects when DOM is ready
  
    // Handle button clicks on "View More"
    document.querySelector('.projects-container').addEventListener('click', function (event) {
      if (event.target.classList.contains('btn')) {
        event.preventDefault();
        alert('This is a placeholder for project details!');
      }
    });
  });
  
 
  function submitForm(event) {
    event.preventDefault(); // Prevent page reload
  

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
    } else {

      console.log("Form Submitted:", { name, email, message });
      alert("Thank you for reaching out, " + name + "! We will get back to you soon.");
    }
  }
  
  
  let contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', submitForm); // Callback function for form submission
  }
  