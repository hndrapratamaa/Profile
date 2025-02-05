function changePage(page) {
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
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    
// Initialize first page
document.addEventListener('DOMContentLoaded', () => {
    changePage('main');
});
    
}
