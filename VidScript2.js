document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.tagName === 'A') {
      const href = target.getAttribute('href');
      
      // Check if the link is external (starts with http:// or https://)
      if (href && /^https?:\/\//i.test(href)) {
        event.preventDefault();
        console.log('External link blocked:', href);
        // You can add a message or other behavior here
      }
    }
  });


  // List of blocked URLs (patterns)
const blockedUrls = [
  'https://deriv.com/signup/?t=CFrGucQsPL4nMFppYa5wD2Nd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=exchangedbeadannually.com',
  'https://www.xm.com/promotions?utm_source=graduatedgroan.com&utm_content=1054414&utm_medium=affiliate', 'https://deriv.com/signup/?t=-df1Nyt8R_CTNC486YGZF2Nd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=sankjerusalemflabbergasted.com', 'https://deriv.com/signup/?t=NBH3c0KIo3jTYHdix6-slmNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=gossipprotectioncredentials.com','http://wordbodily.com/api/users?token=L3M5NjBjNTlxP2FkYj15JmF6dWRqZGs9NTkmZGV2PXIma2V5PTg0MDJlMWQ3NGVmNWVmNTcxMmRhZmE2ZWJjYTM4MWJkJmt3PSU1QiUyNnF1b3QlM0JzZXglMjZxdW90JTNCJTJDJTI2cXVvdCUzQmFuZCUyNnF1b3QlM0IlMkMlMjZxdW90JTNCdGhlJTI2cXVvdCUzQiUyQyUyNnF1b3QlM0JjaXR5JTI2cXVvdCUzQiUyQyUyNnF1b3QlM0IxOTk4JTI2cXVvdCUzQiU1RCZwc2lkPWNmLTI2MzNfMSZwc3Q9MTY5MTU1MDc1NSZyZWZlcj1odHRwcyUzQSUyRiUyRnZpZHNyYy50byUyRmVtYmVkJTJGdHYlMkZ0dDAxNTkyMDYlMkYxJTJGMSZyZXM9MTQuMzEmcm10Yz10JnNjckhlaWdodD04NjQmc2NyV2lkdGg9MTUzNiZzaGlwPSZzaHU9MGU4ZTQyOTI4OGE3ZjgwMGU4ZjkxMDYzOTc0ZDQ0ODJlM2ZmNmQwZmE0ODA4OGFiMmJlZjM0NWUyZDQ3YmY5YjI3ZDU1OGU1ZDBjNzg0OTFiMWVkMTExM2E5ODNiODZhYzlmYjg4YThlM2VhZjk2Y2MwZmQ1YzQ3YTQ5YzVlNTkwZTE0MDM2ODhkNmEzNzM2NWE0NzI3OTA3MjU2NWQ1ZDA4MjU0Nzg0MTE0NGY4MjNmY2UzNDJmNTk3MTAxMyZzdWIzPWludm9rZV9sYXllciZ0ej0tNSZ2PTIzLjgudi4y&uuid=&pii=&in=false','http://eyeballcorruption.com/api/users?token=L3M5NjBjNTlxP2FkYj15JmRldj1yJmtleT04NDAyZTFkNzRlZjVlZjU3MTJkYWZhNmViY2EzODFiZCZrdz0lNUIlMjZxdW90JTNCc2V4JTI2cXVvdCUzQiUyQyUyNnF1b3QlM0JhbmQlMjZxdW90JTNCJTJDJTI2cXVvdCUzQnRoZSUyNnF1b3QlM0IlMkMlMjZxdW90JTNCY2l0eSUyNnF1b3QlM0IlMkMlMjZxdW90JTNCMTk5OCUyNnF1b3QlM0IlNUQmcHNpZD1jZi0yNjMzXzAmcHN0PTE2OTE1NTA4MDMmcmVmZXI9aHR0cHMlM0ElMkYlMkZ2aWRzcmMudG8lMkZlbWJlZCUyRnR2JTJGdHQwMTU5MjA2JTJGMSUyRjEmcmVzPTE0LjMxJnJtdGM9dCZzY3JIZWlnaHQ9ODY0JnNjcldpZHRoPTE1MzYmc2VrYm49MTYmc2hpcD0mc2h1PTJkYzI1YzE3Y2Q5YmExMDdmZDk2NDc4NTViYjA2NjBlZWI2MWVmYjE5OTMyMDU2ZDM4ODhiM2MxNGNkYTY4YWZkZGZjOTRkOGNjN2ExMzlhYTRiY2MzOThiNGU2OWJkNDAzMzhlOGQwYjIyYzYwMTM1M2IyOTIwNmI0NTM2YWZjZGYxYTI1YzRhYmVlZTAwZjQxMThhMGY1ZTQ4ZjkxNjA0NThmZjYwZmIwNjhhOTI0OThmZGY1ODg1MTUxMTUmc3ViMz1pbnZva2VfbGF5ZXImdHo9LTUmdj0yMy44LnYuMQ%3D%3D&uuid=&pii=&in=false','https://www.bet365.com/olp/open-account?affiliate=365_02342825', 'https://938c9.celeb-gossig-newsletter.com/lp/new-lps/lp2/?tag=500057&tag1=ADK&tag2=20175723&tag3=500057&tag4=ADK&clickid=3olz1jhdq5ll3p8zxy&country={country}&affid=500057&subid=20175723&as=adk&tn=30&tx=90', 'https://chingari.io/trending/askdkfusafodsfas?utm_source=google&utm_medium=organic&utm_campaign=AdTraMain_20175723' , 'http://vestigeboxesreed.com/api/users?token=L3M5NjBjNTlxP2FkYj1uJmRldj1yJmtleT04NDAyZTFkNzRlZjVlZjU3MTJkYWZhNmViY2EzODFiZCZrdz0lNUIlMjZxdW90JTNCbG9raSUyNnF1b3QlM0IlMkMlMjZxdW90JTNCMjAyMSUyNnF1b3QlM0IlNUQmcHNpZD1BTi0xMDMxXzAmcHN0PTE2OTE1ODgxMzMmcmVmZXI9aHR0cHMlM0ElMkYlMkZ2aWRzcmMudG8lMkZlbWJlZCUyRnR2JTJGdHQ5MTQwNTU0JnJlcz0xNC4yNDUmcm10Yz10JnNjckhlaWdodD04MTImc2NyV2lkdGg9Mzc1JnNjdGVtbT05NyZzaGlwPSZzaHU9ZmI3ZDJmMjdkZDlhMzM0NmUyNWRiYjAwMzhmMjc0NjMyNjg3Zjg1NmM0YTdhZWZhN2RmM2I3ZmRjMWE3YWYxNzFlNDBiZWZhOGE1NDhhYWFlMTAzZTVhNTdlZjI3N2Q1N2MyMTNhNjFkNDljMjA4OWU4YmU0ZmM3ZGM5MjczNTJlNWRmNzYwOWI0YTE2ZjEyNzdiMzdkYWQyZGRiOGFmYWU4NWYzNDZkNGM4ZDQ0M2QzM2U0YTVlYTIxJnN1YjM9aW52b2tlX2xheWVyJnR6PS01JnV1aWQ9MmI2NmZiNWEtNzZjMC00NDRiLWExNWEtZGM2NWIyMTlmZDc4JTNBMyUzQTEmdj0yMy44LnYuMQ%3D%3D&uuid=2b66fb5a-76c0-444b-a15a-dc65b219fd78%3A3%3A1&pii=&in=false', 'https://exchangedbeadannually.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723' , 'http://distressamusement.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723', 'https://chingari.io/trending/askdkfusafodsfas?utm_source=google&utm_medium=organic&utm_campaign=AdTraMain_20175723', 'https://deriv.com/signup/?t=B6GyU6wWU7egKNCA5iqU42Nd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=distressamusement.com', 'http://mademadelavish.com/api/users?token=L3M5NjBjNTlxP2FkYj1uJmRldj1yJmtleT04NDAyZTFkNzRlZjVlZjU3MTJkYWZhNmViY2EzODFiZCZrdz0lNUIlMjZxdW90JTNCZ2FtZSUyNnF1b3QlM0IlMkMlMjZxdW90JTNCb2YlMjZxdW90JTNCJTJDJTI2cXVvdCUzQnRocm9uZXMlMjZxdW90JTNCJTJDJTI2cXVvdCUzQjIwMTElMjZxdW90JTNCJTVEJnBtaW09OTcmcHNpZD1BTi0xMDMxXzAmcHN0PTE2OTE1OTQyMDcmcmVmZXI9aHR0cHMlM0ElMkYlMkZ2aWRzcmMudG8lMkZlbWJlZCUyRnR2JTJGdHQwOTQ0OTQ3JnJlcz0xNC4yNDUmcm10Yz10JnNjckhlaWdodD04MTImc2NyV2lkdGg9Mzc1JnNoaXA9JnNodT0yNTdlN2I5YjI3OTRmMGE4Y2VlOTkxMjQ2NTlkMmM3Zjk4MWUwMWJkM2JjMWZkM2VmNzAxYWVmNmYyOWMzOGFjNGJkMWU1ZDVmZGQzMDI1NWNlYWU2MzJhZGM1ODgxM2M2ZjQ4MWE0ODBlYjQxYWY3NDNlYzQ0Y2EyYjAwMTM1YjljYzhiYjc3YjE2MjhjN2UzZmMwNGI0MTlhMDEyODQ1MjRjZTlhYzJmNGIxZjlhYjY3MWRiZmE3ZmI5ZiZzdWIzPWludm9rZV9sYXllciZ0ej0tNSZ1dWlkPWZiZTlhZDc3LTIxZmEtNGVjOC1hMDhmLTEzZWFlNjY1YTYzNiUzQTMlM0ExJnY9MjMuOC52LjE%3D&uuid=fbe9ad77-21fa-4ec8-a08f-13eae665a636%3A3%3A1&pii=&in=false', 'https://chingari.io/trending/askdkfusafodsfas?utm_source=google&utm_medium=organic&utm_campaign=AdTraMain_20175723', 'http://graduatedgroan.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723', 'distressamusement.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723', 'https://www.xm.com/promotions?utm_source=distressamusement.com&utm_content=1054414&utm_medium=affiliate', 'http://sankjerusalemflabbergasted.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723', 'vestigeboxesreed.com/s960c59q?key=0f22c1fd609f13cb7947c8cabfe1a90d&submetric=20175723', 'https://www.xm.com/promotions?utm_source=sankjerusalemflabbergasted.com&utm_content=1054414&utm_medium=affiliate','https://deriv.com/signup/?t=9jHVjQp549z8ojNuCaS4zGNd7ZgqdRLk&utm_source=affiliate_117818&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer=threateningeleven.com', '', ''
];

// Function to check if a URL is blocked
function isBlocked(url) {
  return blockedUrls.some(blockedUrl => url.startsWith(blockedUrl));
}

// Intercept link clicks
document.addEventListener('click', event => {
  const target = event.target;
  if (target.tagName === 'A' && target.href) {
    const href = new URL(target.href);
    if (isBlocked(href.pathname)) {
      event.preventDefault();
      // Optionally, you can display a message to the user indicating access is blocked
      // For example: target.textContent = 'Access blocked';
    }
  }
});


  
