function changePage(page) {
    // Update history
    window.history.pushState({ page }, '', `#${page}`);
    
    // Toggle page visibility
    const pages = ['main', 'links', 'projects'];
    pages.forEach(p => {
      const el = document.getElementById(p);
      if(p === page) {
        el.style.display = 'block';
        el.classList.add('fade-in');
      } else {
        el.style.display = 'none';
        el.classList.remove('fade-in');
      }
    });
  
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Handle initial load
  document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.substring(1) || 'main';
    changePage(initialPage);
  });
  
  // Handle back/forward navigation
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'main';
    changePage(page);
  });
  
  // Image error handling
  document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      console.error('Failed to load image:', this.src);
    };
  });
