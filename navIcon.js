
var rootElement = document.documentElement;
var scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Replace "scrollToTopBtn" with the actual ID of your button element

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal) > 0.20) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

document.addEventListener("scroll", handleScroll);
