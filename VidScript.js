// Select the ad links that you want to prevent from opening in new tabs
const adLinks = document.querySelectorAll('https://xml-api.online/click?c=d9eazze6dll2luyqu&f=500057&s=20175723&d=bVSw6k7b226970223a223230302e392e3131352e3431222c2262726f77736572223a224368726f6d65222c2262726f7773657256657273696f6e223a223131352e302e302e30222c226f73223a2257696e646f7773227duZnjS&b=0.00017&cp=1');
const adLinks = document.querySelectorAll('https://deriv.com/signup/?t=otjUdEab_UWDPh0jF19nFWNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=producesdiminishhardworking.com');
const adLinks = document.querySelectorAll('a.ad-link');
const adLinks = document.querySelectorAll('a.ad-link');
const adLinks = document.querySelectorAll('a.ad-link');
// Function to prevent the default behavior of the ad links
function blockAdLinks(event) {
  event.preventDefault();
}

// Attach the event listener to block the ad links
for (const adLink of adLinks) {
  adLink.addEventListener('click', blockAdLinks);
}

