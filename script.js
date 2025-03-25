// This is the Hamburger Menu for Mobile View 
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.navbar ul');
const menuItems = document.querySelectorAll('.navbar ul li')

// Toggle Menu Visibility with Click
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Add delay for each menu item for smooth fade-in
    if (navMenu.classList.contains('active')) {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index); // 100ms delay per item
        });
    } else {
        // Hide menu items with fade out
        menuItems.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
        });
    }
});
