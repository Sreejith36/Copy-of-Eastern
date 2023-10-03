
// Fixed navigation icon 

var rootElement = document.documentElement;
var scrollToTopBtn = document.getElementById("scrollToTopBtn"); 


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

// **** side bar open / close **********

window.document.getElementById("mySidepanel").style.width = "0";

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
