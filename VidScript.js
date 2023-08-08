// Select the ad links that you want to prevent from opening in new tabs
const adLinks = document.querySelectorAll('a.ad-link');

// Function to prevent the default behavior of the ad links
function blockAdLinks(event) {
  event.preventDefault();
}

// Attach the event listener to block the ad links
for (const adLink of adLinks) {
  adLink.addEventListener('click', blockAdLinks);
}

