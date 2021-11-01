/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.getElementById('titleScreen').textContent = document.querySelector('.nav__menu a[href*=' + sectionId + ']').textContent
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TOGGLE TITLE FIRST SECTION WHILE SCROLLING ===============*/
window.addEventListener('scroll', function() {
    var titleBar = document.querySelector('#titleScreen'); 
    
	var element = document.querySelector('#homeSectionTitle');
	var position = element.getBoundingClientRect();

    var aboutSection = document.querySelector('#about');
    var positionAboutSection = aboutSection.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        titleBar.textContent = '';
		console.log('Element is fully visible in screen');
	}

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
		console.log('Element is partially visible in screen');
        //titleBar.textContent = 'Home';
	}

    if(positionAboutSection.top >= 0 && positionAboutSection.bottom <= window.innerHeight) {
        titleBar.textContent = 'About';
		console.log('About section is fully visible in screen');
	}

});