document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
  
    if (headerPlaceholder) {
      fetch('./includes/header.html')
        .then(response => response.text())
        .then(data => {
          headerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
    }
  });
  