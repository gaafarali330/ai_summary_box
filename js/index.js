let aiAnimatedArea = document.getElementById("ai-animated");
let aiRefreshSummary = document.getElementById("ai-refresh-summary");

aiRefreshSummary.addEventListener("click", () => {
  playTimeOut();
});

function playTimeOut() {
  aiAnimatedArea.style.display = "block";
  setTimeout(() => {
    aiAnimatedArea.style.display = "none";
  }, 5000);
}
