function changePage(page) {
    window.history.pushState({ page }, '', `#${page}`);
    
    const pages = ['main', 'links', 'projects', "documents"];
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
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.substring(1) || 'main';
    changePage(initialPage);
  });
  
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'main';
    changePage(page);
  });
  
  document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      console.error('Failed to load image:', this.src);
    };
  });
