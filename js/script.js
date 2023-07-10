// Before
function handleScroll(ev) {
    let scrollTop = ev.target.scrollingElement.scrollTop;
    let sectionInput = document.getElementById('sectionInput');
    let navInput = document.getElementById('navInput');

    if (scrollTop > 25) {
        // Hide Section Input
        sectionInput.className = 'hide';
        sectionInput.style.display = 'none';
        // // Show Navbar Input
        navInput.className = 'nav-input showNav';
        navInput.style.display = 'block';
    } else {
        // Show Section Input
        sectionInput.className = 'fixed-section-input show';
        sectionInput.style.display = 'block';
        // // Hide Navbar Input
        navInput.className = 'hideNav';
        navInput.style.display = 'none';
    }
}