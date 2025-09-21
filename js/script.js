const profilePic = document.getElementById("profilePic");
const dropdownMenu = document.getElementById("dropdownMenu");
//Menu visibility
profilePic.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("open");
  event.stopPropagation();
});
//Close the dropdown if user clicks outside
document.addEventListener("click", function (event) {
  if (!dropdownMenu.contains(event.target) && event.target !== profilePic) {
    dropdownMenu.classList.remove("open");
  }
});
//Refresh page
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length && navEntries[0].type === "reload") {
  window.location.href = "/index.html";
}
