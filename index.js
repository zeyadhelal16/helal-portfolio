window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});

window.addEventListener('popstate', function() {
  window.scrollTo(0, 0);
});

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

      document.addEventListener('DOMContentLoaded', function() {
        // Scroll to top on page load to ensure we start at the top after refresh
        window.scrollTo(0, 0);

        const webTab = document.querySelector('.work__tab[data-category="web"]');
        const uiuxTab = document.querySelector('.work__tab[data-category="uiux"]');
        const webProjects = document.querySelectorAll('.work__box[data-category="web"]');
        const uiuxProjects = document.querySelectorAll('.work__box[data-category="uiux"]');

        // ===== PROJECT DATA SEPARATION =====
        // Web Development Projects Data
        const webProjectsData = [
          // Existing web projects will be added here dynamically from HTML
          // This array is for reference - actual projects are in HTML with data-category="web"
        ];

        // UI/UX Design Projects Data - ADD YOUR UI/UX PROJECTS HERE
        // Each project should follow the same structure as web projects
        const uiuxProjectsData = [
          // Example UI/UX project structure (remove this comment and add your projects):
          /*
          {
            title: "Project Title",
            description: "Project description here",
            image: "path/to/image.png",
            url: "https://project-url.com",
            github: "https://github.com/username/repo",
            tools: ["Figma", "Adobe XD", "Sketch"],
            tags: ["UI Design", "UX Research", "Wireframing"]
          }
          */
        ];
        // ===== END PROJECT DATA SEPARATION =====

        // Function to show projects of a given category and hide others
        function showCategory(category) {
          webProjects.forEach(project => {
            project.style.display = (category === 'web') ? 'flex' : 'none';
          });
          uiuxProjects.forEach(project => {
            project.style.display = (category === 'uiux') ? 'flex' : 'none';
          });

          // Update active tab
          webTab.classList.toggle('work__tab--active', category === 'web');
          uiuxTab.classList.toggle('work__tab--active', category === 'uiux');
        }

        // Set initial state (Web Development active)
        showCategory('web');

        // Add event listeners to tabs
        webTab.addEventListener('click', function() {
          showCategory('web');
        });

        uiuxTab.addEventListener('click', function() {
          showCategory('uiux');
        });
      });