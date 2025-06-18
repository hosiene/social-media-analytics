// Content Type Chart (Doughnut)
const contentChart = new Chart(
  document.getElementById('contentChart'),
  {
    type: 'doughnut',
    data: {
      labels: ['Physics', 'AI', 'Coding', 'Science News'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
        ]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Engagement by Content Type'
        }
      }
    }
  }
);

// Follower Growth Chart (Line)
const growthChart = new Chart(
  document.getElementById('growthChart'),
  {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Followers',
        data: [850, 920, 1100, 1250, 1420],
        borderColor: '#4BC0C0',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Follower Growth'
        }
      }
    }
  }
);

// AI Recommendations
const recommendations = [
  "Try more video content - your audience engages 40% more with videos",
  "Post between 4-6 PM on weekdays for maximum reach",
  "Your audience loves quantum physics explanations - create a series!",
  "Use more hashtags: #PhysicsFun gets 200% more reach"
];

// Show random recommendation
document.getElementById('aiRecommendation').textContent = 
  recommendations[Math.floor(Math.random() * recommendations.length)];