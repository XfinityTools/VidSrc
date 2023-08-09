const adLinks = document.querySelectorAll('https://xml-api.online/click?c=d9eazze6dll2luyqu&f=500057&s=20175723&d=bVSw6k7b226970223a223230302e392e3131352e3431222c2262726f77736572223a224368726f6d65222c2262726f7773657256657273696f6e223a223131352e302e302e30222c226f73223a2257696e646f7773227duZnjS&b=0.00017&cp=1');
const adLinks = document.querySelectorAll('https://deriv.com/signup/?t=otjUdEab_UWDPh0jF19nFWNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=producesdiminishhardworking.com');
const adLinks = document.querySelectorAll('https://www.xm.com/promotions?utm_source=producesdiminishhardworking.com&utm_content=1054414&utm_medium=affiliate');
const adLinks = document.querySelectorAll('https://chingari.io/trending/askdkfusafodsfas?utm_source=google&utm_medium=organic&utm_campaign=AdTraMain_20175723');
const adLinks = document.querySelectorAll('http://streetmilligram.com/api/users?token=L3M5NjBjNTlxP2FkYj1uJmRldj1yJmtleT04NDAyZTFkNzRlZjVlZjU3MTJkYWZhNmViY2EzODFiZCZrdz0lNUIlMjZxdW90JTNCdGhlJTI2cXVvdCUzQiUyQyUyNnF1b3QlM0Jnb2RmYXRoZXIlMjZxdW90JTNCJTJDJTI2cXVvdCUzQjE5NzIlMjZxdW90JTNCJTVEJnBzaWQ9Y2YtMjYzM18xJnBzdD0xNjkxNTg1MjQwJnFrYW5xYj04JnJlZmVyPWh0dHBzJTNBJTJGJTJGdmlkc3JjLnRvJTJGZW1iZWQlMkZtb3ZpZSUyRnR0MDA2ODY0NiZyZXM9MTQuMjQ1JnJtdGM9dCZzY3JIZWlnaHQ9ODEyJnNjcldpZHRoPTM3NSZzaGlwPSZzaHU9MzdlZTdkNWZlZThhMGMyNDBmMjkxNzc4NzIzZjI3MmE2NTQ1ZTg2YWJhMzNiZjdhZmI3NzFiNThiNTY2Zjc2YzUzMjY3MjA4NjgyMDYwNWY4YWJlMjNkNDNhYjgzYTNlYThiY2UwMWUxMzVlMjZjODMxYzgwMTYxMzg2MGFhMTZjMGE4NTdhZWNmYzYxY2Q1OTdjNjgxOTYzMWY3MDNiNGNhZDI0MjlhNTMxYzA3NTE1YjFhNmQ3OTZlMTcxM2VkJnN1YjM9aW52b2tlX2xheWVyJnR6PS01JnV1aWQ9Njk3YTU3NTItZGVmOC00MjdkLWE3ZjItNWY5ZjIxMTY2OGYzJTNBMiUzQTEmdj0yMy44LnYuMg%3D%3D&uuid=697a5752-def8-427d-a7f2-5f9f211668f3%3A2%3A1&pii=&in=false');
const adLinks = document.querySelectorAll('https://deriv.com/signup/?t=KLFCQbSD00hSyZcwEoP3mWNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=streetmilligram.com');
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


//second function
function blockURLs(urlList) {
    const currentURL = window.location.href;
  
    // Check if the current URL matches any of the blocked URLs
    for (const blockedURL of urlList) {
      if (currentURL.includes(blockedURL)) {
        // Redirect to a blocked page or show a message
        window.location.href = 'https://xfinitytools.github.io/VidSrc/';
        return; // Exit the loop, no need to check further
      }
    }
  }
  
  // Usage example
  const blockedURLs = [
    'http://streetmilligram.com/api/users?token=L3M5NjBjNTlxP2FkYj1uJmRldj1yJmtleT04NDAyZTFkNzRlZjVlZjU3MTJkYWZhNmViY2EzODFiZCZrdz0lNUIlMjZxdW90JTNCdGhlJTI2cXVvdCUzQiUyQyUyNnF1b3QlM0Jnb2RmYXRoZXIlMjZxdW90JTNCJTJDJTI2cXVvdCUzQjE5NzIlMjZxdW90JTNCJTVEJnBzaWQ9Y2YtMjYzM18xJnBzdD0xNjkxNTg1MjQwJnFrYW5xYj04JnJlZmVyPWh0dHBzJTNBJTJGJTJGdmlkc3JjLnRvJTJGZW1iZWQlMkZtb3ZpZSUyRnR0MDA2ODY0NiZyZXM9MTQuMjQ1JnJtdGM9dCZzY3JIZWlnaHQ9ODEyJnNjcldpZHRoPTM3NSZzaGlwPSZzaHU9MzdlZTdkNWZlZThhMGMyNDBmMjkxNzc4NzIzZjI3MmE2NTQ1ZTg2YWJhMzNiZjdhZmI3NzFiNThiNTY2Zjc2YzUzMjY3MjA4NjgyMDYwNWY4YWJlMjNkNDNhYjgzYTNlYThiY2UwMWUxMzVlMjZjODMxYzgwMTYxMzg2MGFhMTZjMGE4NTdhZWNmYzYxY2Q1OTdjNjgxOTYzMWY3MDNiNGNhZDI0MjlhNTMxYzA3NTE1YjFhNmQ3OTZlMTcxM2VkJnN1YjM9aW52b2tlX2xheWVyJnR6PS01JnV1aWQ9Njk3YTU3NTItZGVmOC00MjdkLWE3ZjItNWY5ZjIxMTY2OGYzJTNBMiUzQTEmdj0yMy44LnYuMg%3D%3D&uuid=697a5752-def8-427d-a7f2-5f9f211668f3%3A2%3A1&pii=&in=false',
    'https://deriv.com/signup/?t=KLFCQbSD00hSyZcwEoP3mWNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=streetmilligram.com',
    'https://deriv.com/signup/?t=KLFCQbSD00jUbDSIGo4nsGNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=navigationconcept.com',
    
  ];
  
  blockURLs(blockedURLs);
  

