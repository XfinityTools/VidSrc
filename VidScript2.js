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
  