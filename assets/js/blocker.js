// BlockerJS By iCorp
console.log("BlockerJS Booted")
console.log("BlockerJS now running...")

// Check if the cookie named "account" is present
function checkCookie() {
  var cookieName = "account=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return true; // Cookie found
    }
  }
  
  return false; // Cookie not found
}

// Redirect if the user is on specific pages and the cookie is not present
function redirectIfCookieNotPresent() {
  var currentPage = window.location.pathname;
  
  // Check if the current page is within the app/ or account/ directory
  if (currentPage.startsWith("/app/") || currentPage.startsWith("/dashboard/")) {
    if (!checkCookie()) {
      window.location.href = "login.html"; // Redirect to login.html
    }
  }
}

// Call the function on page load
window.onload = redirectIfCookieNotPresent;
