// Theme color persistence
document.addEventListener("DOMContentLoaded", () => {
  const themeColorPicker = document.getElementById("themeColor");

  // Load saved theme color from localStorage
  const savedThemeColor = localStorage.getItem("themeColor");
  if (savedThemeColor) {
    document.documentElement.style.setProperty("--primary-color", savedThemeColor);
    themeColorPicker.value = savedThemeColor;
  }

  // Update theme color dynamically
  themeColorPicker.addEventListener("input", (event) => {
    const newColor = event.target.value;
    document.documentElement.style.setProperty("--primary-color", newColor);

    // Save the selected color to localStorage
    localStorage.setItem("themeColor", newColor);
  });

  startCounters();
  createChart();
});

// Sidebar toggle

document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("collapsed");
});

// Count up animation
function startCounters() {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

// Chart.js graph
function createChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Revenue (KES)',
        data: [1200, 1900, 3000, 2500, 3200],
        backgroundColor: '#3498db'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
