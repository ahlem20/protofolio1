// Theme toggle
const toggleButton = document.getElementById("toggle-theme");
const html = document.documentElement;

function updateTheme(isDark) {
  html.classList.toggle("dark", isDark);
  toggleButton.textContent = isDark ? "☀️ فاتح" : "🌙 داكن";
  localStorage.setItem("darkMode", isDark);
}

toggleButton.addEventListener("click", () => {
  const isDark = !html.classList.contains("dark");
  updateTheme(isDark);
});

// Load saved mode
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("darkMode") === "true";
  updateTheme(saved);

  // Fill skills
  const skills = [
    { name: "HTML5", percent: 95 },
    { name: "CSS3", percent: 85 },
    { name: "JavaScript", percent: 65 },
    { name: "UX/UI Design", percent: 85 },
  ];
  const skillsContainer = document.getElementById("skills-container");
  skills.forEach(skill => {
    skillsContainer.innerHTML += `
      <div class="mb-6">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium text-indigo-600">${skill.name}</span>
          <span class="text-sm font-medium text-gray-600">${skill.percent}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div class="bg-indigo-600 h-3 rounded-full transition-all duration-700" style="width: ${skill.percent}%"></div>
        </div>
      </div>
    `;
  });

  // Projects
  const projectsContainer = document.getElementById("projects-container");
  for (let i = 1; i <= 6; i++) {
    projectsContainer.innerHTML += `
      <div class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
        <img src="img/work${i}.jpg" alt="work${i}" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <p class="text-white text-lg font-semibold">المشروع ${i}</p>
        </div>
      </div>
    `;
  }

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();
});
