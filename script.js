// Check JS connection
console.log("JavaScript connected");

// Sample job data
const jobs = [
  { title: "Frontend Developer", location: "Remote", company: "TechCorp" },
  { title: "Backend Developer", location: "Mumbai", company: "CodeWorks" },
  { title: "UI/UX Designer", location: "Delhi", company: "DesignHub" }
];

// Load jobs dynamically
const jobList = document.getElementById("jobList");

jobs.forEach(job => {
  const div = document.createElement("div");
  div.className = "job-card";
  div.innerHTML = `
    <h3>${job.title}</h3>
    <p>${job.company}</p>
    <p>${job.location}</p>
    <button class="btn primary">Apply</button>
  `;
  jobList.appendChild(div);
});

// Button actions
document.getElementById("browseBtn").addEventListener("click", () => {
  document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Login feature coming soon!");
});

document.getElementById("registerBtn").addEventListener("click", () => {
  alert("Register feature coming soon!");
});
