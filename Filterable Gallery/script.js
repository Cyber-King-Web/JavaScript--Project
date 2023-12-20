// Get galleryFilter & galleryItems
const galleryFilter = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

// On event perform
galleryFilter.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // Deactivate existing active 'filter-item'
    galleryFilter.querySelector(".active").classList.remove("active");

    // Activate new 'filter-item'
    event.target.classList.add("active");

    // Get the filtered value
    const filterValue = event.target.getAttribute("data-filter");

    // Filter the gallery items
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
});
