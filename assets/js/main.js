
document.addEventListener('DOMContentLoaded', function() {
  /**
   * Header scroll effect
   */
  const header = document.getElementById('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  }

  /**
   * Mobile menu toggle
   */
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.classList.toggle('-translate-y-full'); // Adjust based on initial state in CSS
      menuIcon.classList.toggle('hidden', isOpen);
      closeIcon.classList.toggle('hidden', !isOpen);
      mobileMenuButton.setAttribute('aria-expanded', isOpen.toString());
    };

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  /**
   * Portfolio filtering
   */
  const filtersContainer = document.getElementById('portfolio-filters');
  const portfolioGrid = document.getElementById('portfolio-grid');

  if (filtersContainer && portfolioGrid) {
    const filterButtons = filtersContainer.querySelectorAll('.portfolio-filter-button');
    const portfolioItems = portfolioGrid.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Update active button style
        filterButtons.forEach(btn => btn.classList.remove('active', 'bg-accent', 'text-accent-foreground', 'border-accent', 'hover:bg-accent/90'));
        filterButtons.forEach(btn => btn.classList.add('text-primary', 'border', 'border-border', 'hover:bg-accent/10', 'hover:text-accent', 'hover:border-accent/50'));

        button.classList.add('active', 'bg-accent', 'text-accent-foreground', 'border-accent', 'hover:bg-accent/90');
         button.classList.remove('text-primary', 'border', 'border-border', 'hover:bg-accent/10', 'hover:text-accent', 'hover:border-accent/50');


        // Filter items
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block'; // Or your default display type
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

});
